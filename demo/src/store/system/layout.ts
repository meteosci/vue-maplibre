import { isBoolean, isPlainObject } from 'lodash'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-05-13 16:40:38
 * @LastEditTime: 2023-05-31 22:25:04
 * @LastEditors: cweibo legend2weibo@gmail.com
 * @Description:
 * @FilePath: \lc_-sys_-platform\src\store\system\layout.ts
 */
import { acceptHMRUpdate, defineStore } from 'pinia'
// import { ElRecord } from '@src/utils/types'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useLayoutStore = defineStore('layout', {
  // a function that returns a fresh state
  state: () => ({
    global: {
      header: false,
      leftDrawerMini: false,
      content: false,
      footer: false,
      layerManager: false,
      navigation: false,
      featureInfo: false
    },
    /**
     * index 页面布局参数
     */
    dynamicRender: {
      datasource: {
        workBench: false
      }
    }
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    /**
     * 切换全局布局
     * @param {*} state
     * @param {*} layoutOpts
     */
    toggleGlobalLayout(layoutOpts) {
      const optsArray = Object.keys(layoutOpts)
      optsArray.forEach((opt) => {
        isBoolean(layoutOpts[opt]) && (this.global[opt] = layoutOpts[opt])
      })
    },
    /**
     * 切换 DynamicRender 页面布局
     * @param {*} state
     * @param {*} layoutOpts
     */
    toggleDynamicRenderPageLayout(layoutOpts) {
      const fn = (opts, layout) => {
        const optsArray = Object.keys(opts)
        optsArray.forEach((opt) => {
          if (isPlainObject(opts[opt])) {
            fn(opts[opt], layout[opt])
          }
          else {
            isBoolean(opts[opt]) && (layout[opt] = opts[opt])
          }
        })
      }

      fn(layoutOpts, this.dynamicRender)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
}
