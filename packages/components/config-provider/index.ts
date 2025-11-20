/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-14 16:57:59
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-14 21:59:25
 * @FilePath: \vue-maplibre\packages\components\config-provider\index.ts
 */
import type { SFCWithInstall } from '@vue-maplibre/utils/types'
import type { App } from 'vue'
import ConfigProvider from './src'

ConfigProvider.install = (app: App): void => {
  app.component(ConfigProvider.name, ConfigProvider)
}

export const VmConfigProvider = ConfigProvider as SFCWithInstall<typeof ConfigProvider>

export default VmConfigProvider

export * from './src'
