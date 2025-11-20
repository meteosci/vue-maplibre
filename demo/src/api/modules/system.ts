/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-06 17:58:31
 * @LastEditTime: 2024-03-31 12:50:21
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \maplibre-ext\demo\src\api\modules\system.ts
 */

import type { AxiosResponseData, CustomConfig } from '@src/types'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type Adapter from 'axios-mock-adapter'
import type { RequestTools } from '..'
import router from '@src/router'
import * as webStorage from '@src/utils/web-storage'
import { assign, find } from 'lodash'
import menus from './mock-menus'

const users = [
  { username: 'admin', password: '123456', id: 'admin-uuid', name: 'Admin' },
  { username: 'editor', password: 'editor', id: 'editor-uuid', name: 'Editor' }
]

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
   * @description 登录
   * @param {object} data 登录携带的信息
   */
  login(data = {}) {
    // if (import.meta.env.VITE_MOCK_ENABLED !== 'true') {
    //   return request({
    //     url: '/auth/login',
    //     method: 'post',
    //     data
    //   })
    // }
    // 模拟数据
    mock.onAny('/auth/login').reply((config) => {
      const data = tools.parse(config.data)
      const user = find(users, {
        username: data.username,
        password: data.password
      })
      return user ? tools.responseSuccess(assign({}, user, { accessToken: 'f5befe1a-962c-4cdd-bf45-77ce306dbbce' })) : tools.responseError({}, '账号或密码不正确')
    })
    // 接口请求
    return requestForMock({
      url: '/auth/login',
      method: 'post',
      data
    })
  },
  /**
   * 获取用户信息
   * @returns 返回用户信息
   */
  getUserInfo() {
    // if (import.meta.env.VITE_MOCK_ENABLED !== 'true') {
    //   return request({
    //     url: '/user/info',
    //     method: 'get'
    //   })
    // }
    // 模拟数据
    mock.onAny('/user/info').reply((config) => {
      const uuid = webStorage.getLocalStorage('uuid')
      const user = find(users, {
        id: uuid
      })
      if (user) {
        return tools.responseSuccess(assign({}, user))
      }
      else {
        webStorage.removeLocalStorage('token')
        webStorage.removeLocalStorage('uuid')
        router.push('/login')
        return tools.responseError({}, '未授权, 请登录!')
      }
    })
    // 接口请求
    return requestForMock({
      url: '/user/info',
      method: 'post'
    })
  },
  /**
   * @description 获取有权限的菜单
   * @param {object} data
   */
  getAccessibleMenus(data = {}) {
    // if (import.meta.env.VITE_MOCK_ENABLED !== 'true') {
    //   return request({
    //     url: '/api/menu/accessible',
    //     method: 'get',
    //     data
    //   })
    // }
    // 模拟数据
    mock.onAny('/api/menu/accessible').reply((config) => {
      return tools.responseSuccess(menus)
    })
    // 接口请求
    return requestForMock({
      url: '/api/menu/accessible',
      method: 'post',
      data
    })
  }
})
