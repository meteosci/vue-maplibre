/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-07-04 16:59:07
 * @LastEditTime: 2024-04-15 14:31:15
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\api\modules\common.ts
 */
import qs from 'qs'
const baseURL = import.meta.env.VITE_VUE_APP_API
import { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import Adapter from 'axios-mock-adapter'
import { RequestTools } from '..'
import { AxiosResponseData, CustomConfig } from '@src/types'

export default ({
  service,
  request,
  serviceForMock,
  requestForMock,
  mock,
  tools
}: {
  service: AxiosInstance
  request: (config: AxiosRequestConfig, customConfig?: CustomConfig) => Promise<AxiosResponseData>
  serviceForMock: AxiosInstance
  requestForMock: (config: AxiosRequestConfig, customConfig?: CustomConfig) => Promise<AxiosResponseData>
  mock: Adapter
  tools: RequestTools
}) => ({
  /**
   * 获取静态资源（JSON）等
   * @param {*} fetchStr
   * @returns
   */
  getStaticData(fetchStr, baseURL?) {
    baseURL = baseURL || import.meta.env.BASE_URL
    const res = request(
      {
        baseURL,
        url: fetchStr,
        method: 'get'
      },
      {
        requestLoading: {
          show: false
        }
      }
    )
    return res.then((data: any) => {
      return {
        code: 0,
        data: data,
        msg: 'success'
      } as AxiosResponseData
    })
  },
  getStaticDataProtobuffer(url, baseURL?) {
    baseURL = baseURL || import.meta.env.BASE_URL
    return request({
      baseURL,
      url,
      method: 'get',
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/x-protobuffer'
      }
    })
  }
})
