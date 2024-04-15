/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-27 15:26:12
 * @LastEditTime: 2024-04-15 14:47:42
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\utils\util.ts
 */

import { uniqueId } from 'lodash'

export function title(titleText) {
  const processTitle = import.meta.env.VITE_VUE_APP_TITLE || 'VueCesiumDemo'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
export function open(url) {
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'vc-link-temp')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('vc-link-temp')!)
}

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
export function supplementPath(menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('vc-menu-empty-'),
    ...(e.children
      ? {
          children: supplementPath(e.children)
        }
      : {})
  }))
}

/**
 * 生成随机len位数字
 */
export function randomLenNum(len, date) {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substring(0, len || 4)
  if (date) random = random + Date.now()
  return random
}

/**
 *  将hex颜色转成rgb
 * @param hex
 * @param opacity
 * @returns
 */
export function hexToRgb(hex: string) {
  return {
    red: parseInt('0x' + hex.slice(1, 3)),
    green: parseInt('0x' + hex.slice(3, 5)),
    blue: parseInt('0x' + hex.slice(5, 7))
  }
}

/**
 *
 * @param data
 * @param minValue
 * @param maxValue
 * @param key
 * @returns
 */
export function filterDataByRange(data: any[], minValue, maxValue, key = 'value') {
  return data.filter(item => item[key] >= minValue && item[key] <= maxValue)
}
