/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2024-02-05 16:47:20
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\build\utils\rollup.ts
 */
import { vmPackage } from './paths'
import { getPackageDependencies } from './pkg'

import type { OutputOptions, RollupBuild } from 'rollup'

export const generateExternal = async (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(vmPackage)
  return (id: string) => {
    const packages: string[] = ['vue', ...peerDependencies]
    if (!options.full) {
      packages.push('vue-maplibre/theme-default')
      // dependencies
      packages.push('@vue', ...dependencies)
    }

    return [...new Set(packages)].some(pkg => id === pkg || id.startsWith(`${pkg}/`))
  }
}

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map(option => bundle.write(option)))
}

export function formatBundleFilename(name: string, minify: boolean, ext: string) {
  return `${name}${minify ? '.min' : ''}.${ext}`
}
