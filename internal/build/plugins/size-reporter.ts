/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-06 17:43:48
 * @LastEditTime: 2022-01-18 10:29:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\plugins\size-reporter.ts
 */

import type { FileSizeReporter } from 'rollup-plugin-filesize'
import chalk from 'chalk'
import { command } from '../utils/log'

export const reporter: FileSizeReporter = (opt, outputOptions, info) => {
  return command(`${chalk.cyan(chalk.bold(info.fileName))}: bundle size ${chalk.yellow(info.bundleSize)} -> minified ${chalk.green(info.minSize)}`)
}
