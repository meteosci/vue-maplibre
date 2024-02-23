/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-05 16:28:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-05 16:33:38
 * @FilePath: \vue-maplibre\packages\vue-maplibre\index.ts
 */
import installer from './defaults'
export * from '@vue-maplibre/components'
export * from '@vue-maplibre/directives'
export * from '@vue-maplibre/composables'

// type define
export * from '@vue-maplibre/utils/private/emits'

export { default as makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version

export default installer
