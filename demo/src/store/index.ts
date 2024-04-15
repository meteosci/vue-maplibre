/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-26 17:00:10
 * @LastEditTime: 2024-04-15 14:46:33
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\store\index.ts
 */
import { createPinia } from 'pinia'
import { systemStore } from './system/index'
// import { businessStore } from './business/index'

export const pinia = createPinia()

/**
 * 项目全局 store。
 * 组件内使用不需要传 pinia，组件外使用需要传 pinia。
 */
export const store = {
  system: {
    ...systemStore
  }
}
