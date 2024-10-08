/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-20 15:33:43
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-16 17:18:49
 * @FilePath: \vue-maplibre\packages\components\map\index.ts
 */
import { App } from 'vue'
import { MapOptions } from 'maplibre-gl'
import Map from './src'
import { ConfigProviderContext, SFCWithInstall } from '@vue-maplibre/utils/types'

Map.install = (app: App, opts: ConfigProviderContext): void => {
  app.component(Map.name, Map)
}

const _Map = Map as SFCWithInstall<typeof Map>

export default _Map
export const VmMap = _Map

export * from './src'
