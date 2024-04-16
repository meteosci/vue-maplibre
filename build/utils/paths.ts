/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 10:47:28
 * @LastEditTime: 2024-04-16 18:02:48
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\build\utils\paths.ts
 */
import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const compRoot = resolve(pkgRoot, 'components')
export const themeRoot = resolve(pkgRoot, 'theme-default')
export const composableRoot = resolve(pkgRoot, 'composables')
export const localeRoot = resolve(pkgRoot, 'locale')
export const directiveRoot = resolve(pkgRoot, 'directives')
export const vmRoot = resolve(pkgRoot, 'vue-maplibre')
export const utilRoot = resolve(pkgRoot, 'utils')
export const sharedRoot = resolve(pkgRoot, 'shared')

/** dist */
export const buildOutput = resolve(projRoot, 'dist')
/** dist/vue-maplibre */
export const vmOutput = resolve(buildOutput, 'vue-maplibre')

export const projPackage = resolve(projRoot, 'package.json')
export const compPackage = resolve(compRoot, 'package.json')
export const themePackage = resolve(themeRoot, 'package.json')
export const composablePackage = resolve(composableRoot, 'package.json')
export const localePackage = resolve(localeRoot, 'package.json')
export const directivePackage = resolve(directiveRoot, 'package.json')
export const vmPackage = resolve(vmRoot, 'package.json')
export const vmPackagePublish = resolve(vmRoot, 'package-publish.json')
export const utilPackage = resolve(utilRoot, 'package.json')
