/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-05 16:28:53
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-18 00:24:31
 * @FilePath: \vue-maplibre\packages\vue-maplibre\component.ts
 */

// config
// import VcConfigProvider from '@vue-cesium/components/config-provider'

// Map
import { VmMap } from '@vue-maplibre/components/map'

// Layer
import { VmLayerGltf } from '@vue-maplibre/components/layer'


import type { Plugin } from 'vue'

export default [VmMap, VmLayerGltf] as Plugin[]
