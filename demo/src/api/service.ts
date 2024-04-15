/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-02 10:12:49
 * @LastEditTime: 2024-04-15 14:39:06
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\api\service.ts
 */
import Adapter from 'axios-mock-adapter'
import { get } from 'lodash'
import { webStorage } from '@src/utils'
import axios, { AxiosInstance, AxiosRequestConfig, Canceler } from 'axios'
import { errorLog, errorCreate } from './tools'
import router from '@src/router'
import { pinia, store } from '@src/store'
import smCrypto from 'sm-crypto'
import { Loading, QLoadingShowOptions, QSpinnerIos } from 'quasar'
import { AxiosResponseData, CustomConfig, CustomInternalAxiosRequestConfig } from '@src/types'
import protobuf from 'protobufjs'

const coludtaoGridProtoPromise = new Promise<protobuf.Root>((resolve, reject) => {
  protobuf.load(`${import.meta.env.BASE_URL}protos/cloudtao.grid.proto`, function (err, root) {
    if (err) {
      reject(err)
    }
    resolve(root)
  })
})

// 创建一个请求队列
const requestPendings: Array<{ cancel: Canceler; url: string }> = []
let loadingCount = 0

/**
 * @description 创建请求实例
 * @returns
 */
const createService = () => {
  // 创建一个 axios 实例
  const service = axios.create({})
  // 请求拦截
  service.interceptors.request.use(
    config => {
      const axiosConfig = config as CustomInternalAxiosRequestConfig
      const customConfig = axiosConfig?.customConfig
      if (customConfig.requestLoading?.show) {
        openRequestLoading(customConfig.requestLoading.opts)
      }

      removeRequestPending(config)
      config.cancelToken =
        config.cancelToken ||
        new axios.CancelToken(cancel => {
          requestPendings.push({ cancel, url: config.url + '&' + config.method + '&' + JSON.stringify(config.data) + JSON.stringify(config.params) })
        })

      return axiosConfig
    },
    error => {
      // 发送失败
      errorLog(error)
      return Promise.reject(error)
    }
  )
  // 响应拦截
  service.interceptors.response.use(
    response => {
      const axiosConfig = response.config as CustomInternalAxiosRequestConfig
      removeRequestPending(axiosConfig)
      const customConfig = axiosConfig?.customConfig
      customConfig.requestLoading?.show && closeRequestLoading()

      // dataAxios 是 axios 返回数据中的 data
      const dataAxios = response.data || {}

      // 这个状态码是和后端约定的
      const { code, isCrypto } = dataAxios

      // 如果接口返回的是国密加密的数据 解析
      if (isCrypto) {
        const key = 'SmCryptoKey'
        const keyArray = utf8ToArray(key)
        const keyHex = ArrayToHex(keyArray)
        dataAxios.data = JSON.parse(smCrypto.sm4.decrypt(dataAxios.data, keyHex))
      }

      const requestData = JSON.parse(axiosConfig.data)
      if (axiosConfig.headers['Content-Type'] === 'application/x-protobuffer' || requestData?.dataFormat === 'Protobuf') {
        return coludtaoGridProtoPromise.then(root => {
          const gridDataMessage = root.lookupType('com.tao.proto.GridData')
          const gMessage = gridDataMessage.decode(new Uint8Array(dataAxios))
          const gridData = gridDataMessage.toObject(gMessage, {
            defaults: true
          })

          return {
            code: 0,
            data: gridData,
            msg: '解析成功'
          }
        })
      }

      // 根据 code 进行判断
      if (code === undefined) {
        // 如果没有 code 代表这是非约定返回 或者不是项目后端开发的接口
        return dataAxios
      } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (code) {
          case 0:
            // [ 示例 ] code === 0 代表没有错误
            return dataAxios
          case 200:
            // [ 示例 ] code === 0 代表没有错误
            // return dataAxios.data
            return dataAxios
          case 'xxx':
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: xxx ] ${dataAxios.msg}`)
            break
          default:
            // 不是正确的 code
            customConfig.showErrorNotify && dataAxios.msg && errorCreate(`${dataAxios.msg}`)
            return Promise.reject(dataAxios)
        }
      }
    },
    error => {
      const axiosConfig = error.config as CustomInternalAxiosRequestConfig
      const customConfig = axiosConfig?.customConfig
      removeRequestPending(axiosConfig)
      customConfig?.requestLoading?.show && closeRequestLoading()
      const status = get(error, 'response.status')
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '身份过期,请重新启动'
          webStorage.removeLocalStorage('token')
          webStorage.removeLocalStorage('uuid')
          store.system.usePermissionStore(pinia).clear()
          router.push('/login')
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 413:
          error.message = '请求实体太大'
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
      customConfig.showErrorNotify && errorLog(error)
      return Promise.reject(error)
    }
  )
  return service
}

/**
 * @description 创建请求方法
 * @param {Object} service axios 实例
 */
function createRequestFunction(service: AxiosInstance) {
  return function (config: AxiosRequestConfig, configExt?: CustomConfig) {
    const token = webStorage.getLocalStorage('token')
    const configDefault: AxiosRequestConfig = {
      headers: {
        'Content-Type': get(config, 'headers.Content-Type', 'text/plain')
      },
      timeout: 30000,
      baseURL: config.baseURL || import.meta.env.VITE_VUE_APP_API,
      data: {}
    }
    const queryConfig = Object.assign(configDefault, config)
    if (token) {
      // queryConfig.headers.Authorization = 'Bearer ' + token
    }

    const configExtBase: CustomConfig = {
      requestLoading: {
        show: true
      },
      showErrorNotify: configExt?.showErrorNotify != undefined ? configExt.showErrorNotify : true // 有错误是否用 notify 提示
    }

    const customConfig = Object.assign({}, configExtBase, configExt)
    return service(Object.assign({}, configDefault, config, { customConfig }))
  }
}

/**
 * 从请求队列中移除
 * @param config
 */
function removeRequestPending(config: CustomInternalAxiosRequestConfig) {
  const removeRequestPendings = []
  for (let i = 0; i < requestPendings.length; i++) {
    const request = requestPendings[i]
    if (request.url === config.url + '&' + config.method + '&' + JSON.stringify(config.data) + JSON.stringify(config.params)) {
      request.cancel('request canceled', config, request)
      removeRequestPendings.push(request)
    }
  }

  removeRequestPendings.forEach(item => {
    const index = requestPendings.indexOf(item)
    index !== -1 && requestPendings.splice(index, 1)
  })
}

/**
 * 开启全局请求 loading
 */
function openRequestLoading(opts: QLoadingShowOptions) {
  const baseOpts = {
    delay: 400, // ms
    spinner: QSpinnerIos,
    spinnerSize: 30
  }
  loadingCount++
  if (loadingCount === 1) {
    Loading.show(Object.assign({}, baseOpts, opts))
  }
}

/**
 * 关闭全局请求 loading
 */
function closeRequestLoading() {
  if (loadingCount > 0) {
    loadingCount--
  }
  if (loadingCount === 0) {
    Loading.hide()
  }
}

/**
 * 字节数组转 16 进制串
 */
function ArrayToHex(arr) {
  return arr
    .map(item => {
      item = item.toString(16)
      return item.length === 1 ? '0' + item : item
    })
    .join('')
}

/**
 * utf8 串转字节数组
 */
function utf8ToArray(str) {
  const arr = []
  for (let i = 0, len = str.length; i < len; i++) {
    const point = str.codePointAt(i)
    if (point <= 0x007f) {
      // 单字节，标量值：00000000 00000000 0zzzzzzz
      arr.push(point)
    } else if (point <= 0x07ff) {
      // 双字节，标量值：00000000 00000yyy yyzzzzzz
      arr.push(0xc0 | (point >>> 6)) // 110yyyyy（0xc0-0xdf）
      arr.push(0x80 | (point & 0x3f)) // 10zzzzzz（0x80-0xbf）
    } else if (point <= 0xd7ff || (point >= 0xe000 && point <= 0xffff)) {
      // 三字节：标量值：00000000 xxxxyyyy yyzzzzzz
      arr.push(0xe0 | (point >>> 12)) // 1110xxxx（0xe0-0xef）
      arr.push(0x80 | ((point >>> 6) & 0x3f)) // 10yyyyyy（0x80-0xbf）
      arr.push(0x80 | (point & 0x3f)) // 10zzzzzz（0x80-0xbf）
    } else if (point >= 0x010000 && point <= 0x10ffff) {
      // 四字节：标量值：000wwwxx xxxxyyyy yyzzzzzz
      i++
      arr.push(0xf0 | ((point >>> 18) & 0x1c)) // 11110www（0xf0-0xf7）
      arr.push(0x80 | ((point >>> 12) & 0x3f)) // 10xxxxxx（0x80-0xbf）
      arr.push(0x80 | ((point >>> 6) & 0x3f)) // 10yyyyyy（0x80-0xbf）
      arr.push(0x80 | (point & 0x3f)) // 10zzzzzz（0x80-0xbf）
    } else {
      // 五、六字节，暂时不支持
      arr.push(point)
      throw new Error('input is not supported')
    }
  }
  return arr
}

// 用于真实网络请求的实例和请求方法
export const service = createService()
// 实际上由于 axios 响应钩子函数处理导致返回结果改变
export const request = createRequestFunction(service) as unknown as (
  config: AxiosRequestConfig,
  customConfig?: CustomConfig
) => Promise<AxiosResponseData>

// 用于模拟网络请求的实例和请求方法
export const serviceForMock = createService()
export const requestForMock = createRequestFunction(serviceForMock) as unknown as (
  config: AxiosRequestConfig,
  customConfig?: CustomConfig
) => Promise<AxiosResponseData>

// 网络请求数据模拟工具
export const mock = new Adapter(serviceForMock)
