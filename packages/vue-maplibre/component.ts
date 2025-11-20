/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-05 16:28:53
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-29 00:56:34
 * @FilePath: \vue-maplibre\packages\vue-maplibre\component.ts
 */

import type { Plugin } from 'vue'
// config
import VmConfigProvider from '@vue-maplibre/components/config-provider'
// Control
import { VmControlNavigation, VmControlTerrain } from '@vue-maplibre/components/control'
// Layer
import { VmLayerGltf, VmLayerNative } from '@vue-maplibre/components/layer'
// Map
import { VmMap } from '@vue-maplibre/components/map'

export default [VmConfigProvider, VmMap, VmLayerGltf, VmLayerNative, VmControlNavigation, VmControlTerrain] as Plugin[]
