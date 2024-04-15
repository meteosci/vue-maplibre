/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-05-13 16:13:37
 * @LastEditTime: 2024-01-09 16:28:18
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \demo\src\store\system\user.ts
 */

import { acceptHMRUpdate, defineStore } from 'pinia'
import { useDBStore } from './db'
import { UserInfo } from '@src/types'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useUserStore = defineStore('user', {
  // a function that returns a fresh state
  state: () => ({
    info: {} as UserInfo
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} context
     * @param {*} info info
     */
    async set(info) {
      // store 赋值
      this.info = info
      const dbStore = useDBStore()
      // 持久化
      dbStore.set({
        dbName: 'sys',
        path: 'user.info',
        value: info,
        user: true
      })
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} context
     */
    async load() {
      // store 赋值
      const dbStore = useDBStore()
      const info = dbStore.get({
        dbName: 'sys',
        path: 'user.info',
        defaultValue: '',
        user: true
      })
      this.set(info)
    }
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
