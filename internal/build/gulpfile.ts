/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2024-04-16 09:54:27
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\build\gulpfile.ts
 */
import path from 'path'
import { mkdir, copyFile } from 'fs/promises'
import { copy } from 'fs-extra'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { runTask, withTaskName } from './utils/gulp'
import { buildOutput, vmOutput, vmPackage, projRoot, vmRoot } from './utils/paths'
import { buildConfig } from './build-info'
import type { TaskFunction } from 'gulp'
import type { Module } from './build-info'

export const copyFiles = () =>
  Promise.all([
    copyFile(vmPackage, path.join(vmOutput, 'package.json')),
    copyFile(path.resolve(projRoot, 'README.md'), path.resolve(vmOutput, 'README.md')),
    copyFile(path.resolve(projRoot, 'typings/global.d.ts'), path.resolve(vmOutput, 'global.d.ts')),
    copyFile(path.resolve(vmRoot, 'package-publish.json'), path.resolve(vmOutput, 'package.json'))
  ])

export const copyTypesDefinitions: TaskFunction = done => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) => withTaskName(`copyTypes:${module}`, () => copy(src, buildConfig[module].output.path, { recursive: true }))

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const copyFullStyle = async () => {
  await mkdir(path.resolve(vmOutput, 'dist'), { recursive: true })
  await copyFile(path.resolve(vmOutput, 'theme-default/index.css'), path.resolve(vmOutput, 'dist/index.css'))
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(vmOutput, { recursive: true })),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    // runTask('buildHelper'),
    series(
      withTaskName('buildThemeChalk', () => run('pnpm run -C packages/theme-default build')),
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles)
) as any

export * from './types-definitions'
export * from './modules'
export * from './full-bundle'
// export * from './helper'
