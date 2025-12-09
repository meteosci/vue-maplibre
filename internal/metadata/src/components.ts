/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-12 23:15:41
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-21 23:33:02
 * @FilePath: \vue-maplibre\internal\metadata\src\components.ts
 */
import path from 'node:path'
import { ensureDir, projRoot, writeJson } from '@vue-maplibre/build'
import chalk from 'chalk'
import consola from 'consola'
import glob from 'fast-glob'

const pathOutput = path.resolve(__dirname, '..', 'dist')

async function main() {
  await ensureDir(pathOutput)

  const components = await glob('**/', {
    cwd: path.resolve(projRoot, 'packages/components'),
    onlyDirectories: true,
    ignore: ['**/__test__/**', '**/src/**']
  })

  await writeJson(path.resolve(pathOutput, 'components.json'), components)
  consola.success(chalk.green('Component list generated', components))
}

main()
