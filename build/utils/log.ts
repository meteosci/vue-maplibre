/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-06 17:43:48
 * @LastEditTime: 2022-01-17 23:07:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\utils\log.ts
 */
import process from 'process'
import chalk from 'chalk'

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const [command, info, error] = ['command', 'info', 'error'].map((symbol: string) => {
  return (msg: string) => `[${symbol}] ${msg}`
})
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const [group, endGroup] = ['group', 'endgroup'].map(symbol => {
  return (groupMsg: string) => `##[${symbol}] ${groupMsg}`
})

export function cyan(str: string) {
  console.log(command(chalk.cyan(str)))
}

export function yellow(str: string) {
  console.log(command(chalk.yellow(str)))
}

export function green(str: string) {
  console.log(command(chalk.green(str)))
}

export function red(str: string) {
  console.log(error(chalk.red(str)))
}

export function errorAndExit(e: Error): never {
  red(e.stack ?? e.message)
  process.exit(1)
}

export { command, info, error, group, endGroup }
