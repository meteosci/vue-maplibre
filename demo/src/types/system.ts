/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-15 14:14:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-15 14:46:49
 * @FilePath: \vue-maplibre\demo\src\types\system.ts
 */
import type { themeLight } from '@src/config/theme'
import type { InternalAxiosRequestConfig } from 'axios'
import type { Emitter } from 'mitt'
import type { QLoadingShowOptions } from 'quasar'

export interface UserInfo {
  username: string
  permissions: string[]
  roles: number[]
}

export type ThemeOptions = typeof themeLight

export interface Menu {
  id: string
  component: string
  icon: string
  iconActive?: string
  locked?: boolean
  hidden?: boolean
  name: string
  path: string
  permission: string
  sort: number
  title: string
  isKeepAlive?: boolean
  caption?: string
  type: number
  redirect?: string
  children?: Array<Menu>
  backBtnConfig?: BackBtnConfig
}

export interface BackBtnConfig {
  show: boolean
  className?: string
}

/**
 * 项目自定义的 axios 请求配置
 */
export interface CustomInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  customConfig?: CustomConfig
}

export interface CustomConfig {
  /**
   * 指定某接口是否需要加载全局 loading 窗口
   */
  requestLoading?: {
    show?: boolean
    opts?: QLoadingShowOptions
  }
  /**
   * 接口请求出错时是否进行Notify提示
   */
  showErrorNotify?: boolean
}

/**
 * 请求接口返回数据之一。
 */
export interface AxiosResponseData {
  /**
   * 请求返回的数据
   */
  data: any
  /**
   * 请求返回的业务状态码
   */
  code: number
  /**
   * 请求返回的业务信息
   */
  msg?: string
  [key: string]: any
}

/**
 * 全局（跨组件）通信的事件
 */
export interface CTMittEvents {
  //
}

/**
 * 全局通信事件提供者
 */
export interface CTEventProvider {
  mitt: Emitter<CTMittEvents>
}
