/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-05 16:28:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-04-09 20:03:31
 * @FilePath: \vue-maplibre\packages\vue-maplibre\all.ts
 */
import installer from './defaults'

export { default as makeInstaller } from './make-installer'
export * from '@vue-maplibre/components'
export * from '@vue-maplibre/composables'
export * from '@vue-maplibre/directives'
export * from '@vue-maplibre/locale'
export * from '@vue-maplibre/shared'

export * from '@vue-maplibre/utils'

// type define
export * from '@vue-maplibre/utils/private/emits'

export const install = installer.install
export const version = installer.version

// export default installer
