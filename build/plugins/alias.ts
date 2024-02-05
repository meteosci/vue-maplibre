/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2024-02-05 17:19:11
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\build\plugins\alias.ts
 */
import { VM_PKG, VM_PREFIX } from '../utils/constants'
import type { Plugin } from 'rollup'

export function alias(): Plugin {
  const THEME_DUFAULT = `${VM_PREFIX}/theme-default`

  return {
    name: 'vue-maplibre-alias-plugin',
    resolveId(id, importer, options) {
      if (!id.startsWith(VM_PREFIX)) return

      if (id.startsWith(THEME_DUFAULT)) {
        return {
          id: id.replaceAll(THEME_DUFAULT, `${VM_PKG}/theme-default`),
          external: 'absolute'
        }
      }

      return this.resolve(id, importer, { skipSelf: true, ...options })
    }
  }
}
