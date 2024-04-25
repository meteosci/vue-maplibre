/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-19 00:10:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-25 22:03:00
 * @FilePath: \vue-maplibre\packages\components\layer\index.ts
 */
import { App } from 'vue'
import LayerNative from './native'
import LayerGltf from './gltf'


import { SFCWithInstall } from '@vue-maplibre/utils/types'

const components = [LayerGltf, LayerNative]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach(cmp => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VmLayerGltf = LayerGltf as SFCWithInstall<typeof LayerGltf>
export const VmLayerNative = LayerNative as SFCWithInstall<typeof LayerNative>

export * from './gltf'
export * from './native'
