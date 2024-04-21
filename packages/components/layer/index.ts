/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-19 00:10:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-21 18:55:13
 * @FilePath: \vue-maplibre\packages\components\layer\index.ts
 */
import { App } from 'vue'
import LayerGltf from './gltf'
import LayerSymbol from './symbol'

import { SFCWithInstall } from '@vue-maplibre/utils/types'

const components = [LayerGltf, LayerSymbol]

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
export const VmLayerSymbol = LayerSymbol as SFCWithInstall<typeof LayerSymbol>

export * from './gltf'
export * from './symbol'
