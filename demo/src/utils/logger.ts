import { pinia, store } from '@store/index'
import { isString } from 'lodash'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-27 15:30:13
 * @LastEditTime: 2023-12-14 16:14:18
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \cloudtao_2023_dps_h5_src\src\utils\logger.ts
 */
import { Notify } from 'quasar'

const webStoragePrefix = import.meta.env.VITE_VUE_APP_PREFIX

/**
 * @description 返回这个样式的颜色值
 * @param {string} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor(type = 'default') {
  let color = ''
  switch (type) {
    case 'default':
      color = '#35495E'
      break
    case 'primary':
      color = '#3488ff'
      break
    case 'success':
      color = '#43B883'
      break
    case 'warning':
      color = '#e6a23c'
      break
    case 'danger':
      color = '#f56c6c'
      break
    default:
      break
  }
  return color
}

/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {string} title title text
 * @param {string} info info text
 * @param {string} type style
 */
export function capsule(title, info, type = 'primary') {
  console.log(
    `%c ${title} %c ${info} %c`,
    'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
    `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
    'background:transparent'
  )
}

/**
 * @description 打印彩色文字
 */
function colorful(textArr) {
  console.log(`%c${textArr.map(t => t.text || '').join('%c')}`, ...textArr.map(t => `color: ${typeColor(t.type)};`))
}

/**
 * @description 打印 default 样式的文字
 */
function plain(text) {
  colorful([{ text }])
}

/**
 * @description 打印 primary 样式的文字
 */
export function primary(text) {
  colorful([{ text, type: 'primary' }])
}

/**
 * @description 打印 success 样式的文字
 */
export function success(text) {
  colorful([{ text, type: 'success' }])
}

/**
 * @description 打印 warning 样式的文字
 */
export function warning(text) {
  colorful([{ text, type: 'warning' }])
}

/**
 * @description 打印 danger 样式的文字
 */
export function danger(text) {
  colorful([{ text, type: 'danger' }])
}

function makeLog(prefix = '') {
  return function (...args) {
    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }
    console.log(...args)
    Notify.create({
      message: args[0],
      timeout: 3000,
      type: 'positive'
    })
  }
}

function makeWarn(prefix = '') {
  return function (...args) {
    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }

    const msg = args.shift()
    const error = new Error(msg)

    console.warn(error.stack, ...args)

    // 添加到日志
    store.system.useLogStore(pinia).push({
      message: '业务逻辑警告',
      type: 'warning',
      meta: {
        error
      }
    })

    Notify.create({
      message: msg,
      timeout: 3000,
      type: 'warning'
    })
  }
}

function makeError(prefix = '') {
  return function (...args) {
    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }

    const msg = args.shift()
    const error = new Error(msg)
    // 打印到控制台
    console.error(error.stack, ...args)
    // 添加到日志
    store.system.useLogStore(pinia).push({
      message: '业务逻辑异常',
      type: 'danger',
      meta: {
        error
      }
    })
    // 显示提示
    Notify.create({
      message: msg,
      timeout: 3000,
      type: 'negative'
    })
  }
}

function makeDebug(prefix = '') {
  return function (...args) {
    if (prefix) {
      if (isString(args[0])) {
        args[0] = `${prefix.trim()} ${args[0]}`
      }
      else {
        args = [prefix.trim(), ...args]
      }
    }

    if (import.meta.env.MODE === 'development') {
      console.log(...args)
      Notify.create({
        message: args[0],
        timeout: 3000,
        type: 'info'
      })
    }
  }
}

const log = makeLog(`【成功】`)
const warn = makeWarn(`【警告】`)
const error = makeError(`【错误】`)
const debug = makeDebug(`【调试】`)

export { debug, error, log, warn }
