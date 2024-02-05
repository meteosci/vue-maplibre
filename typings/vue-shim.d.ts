/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-13 22:43:29
 * @LastEditTime: 2024-02-05 16:36:20
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\typings\vue-shim.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
