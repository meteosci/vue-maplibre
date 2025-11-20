/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-26 17:00:10
 * @LastEditTime: 2024-04-15 14:52:42
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\router\routes.ts
 */

import type { RouteRecordRaw } from 'vue-router'

/**
 * 在布局内显示
 */
const frameIn = [
  {
    children: []
  } as RouteRecordRaw
]
/**
 * 在布局之外显示
 */
const frameOut = [
  // Always leave this as last one,
  // but you can also remove it
  {
    name: 'login',
    path: '/login',
    component: () => import('@src/pages/system/Login.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: '404',
    component: () => import('@src/pages/system/Error404.vue')
  }
]

export const frameInRoutes = frameIn

export default [...frameIn, ...frameOut]
