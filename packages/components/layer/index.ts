/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-19 00:10:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-08 11:01:30
 * @FilePath: \vue-maplibre\packages\components\layer\index.ts
 */
import type { SFCWithInstall } from '@vue-maplibre/utils/types'
import type { App } from 'vue'
import LayerGltf from './gltf'
import LayerNative from './native'

const components = [LayerGltf, LayerNative]

function install(app: App): void {
  components.forEach((cmp) => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach((cmp) => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VmLayerGltf = LayerGltf as SFCWithInstall<typeof LayerGltf>
export const VmLayerNative = LayerNative as SFCWithInstall<typeof LayerNative>

export * from './gltf'
export * from './native'
