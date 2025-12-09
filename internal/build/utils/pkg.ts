/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2024-06-08 10:58:54
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\build\utils\pkg.ts
 */
import type { ProjectManifest } from '@pnpm/types'
import type { Module } from '../build-info'
import { findWorkspacePackages } from '@pnpm/find-workspace-packages'
import { buildConfig } from '../build-info'
import { PKG_NAME, PKG_PREFIX } from './constants'
import { projRoot } from './paths'

export const getWorkspacePackages = () => findWorkspacePackages(projRoot)
export async function getWorkspaceNames(dir = projRoot) {
  const pkgs = await findWorkspacePackages(projRoot)
  const result = pkgs
    .filter(pkg => pkg.rootDir.startsWith(dir))
    .map(pkg => pkg.manifest.name)
    .filter((name): name is string => !!name)
  return result
}

export function getPackageManifest(pkgPath: string) {
  // eslint-disable-next-line ts/no-require-imports
  return require(pkgPath) as ProjectManifest
}

export function getPackageDependencies(pkgPath: string): Record<'dependencies' | 'peerDependencies', string[]> {
  const manifest = getPackageManifest(pkgPath)
  const { dependencies = {}, peerDependencies = {} } = manifest

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies)
  }
}

/** used for type generator */
export function pathRewriter(module: Module) {
  const config = buildConfig[module]

  return (id: string) => {
    id = id.replaceAll(`${PKG_PREFIX}/theme-default`, `${PKG_NAME}/theme-default`)
    id = id.replaceAll(`${PKG_PREFIX}/`, `${config.bundle.path}/`)
    return id
  }
}

export function excludeFiles(files: string[]) {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter(path => !excludes.some(exclude => path.includes(exclude)))
}
