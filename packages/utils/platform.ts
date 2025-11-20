/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-08 18:37:31
 * @LastEditTime: 2024-06-18 10:48:33
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\utils\platform.ts
 */
export function platform() {
  const ua = globalThis.navigator.userAgent
  const isWindowsPhone = /Windows Phone/.test(ua)
  const isSymbian = /SymbianOS/.test(ua) || isWindowsPhone
  const isAndroid = /Android/.test(ua)
  const isFireFox = /Firefox/.test(ua)
  const isChrome = /Chrome|CriOS/.test(ua)
  const isTablet = /iPad|PlayBook/.test(ua) || (isAndroid && !/Mobile/.test(ua)) || (isFireFox && /Tablet/.test(ua))
  const isPhone = /iPhone/.test(ua) && !isTablet
  const isPc = !isPhone && !isAndroid && !isSymbian
  const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return {
    isTablet,
    isPhone,
    isAndroid,
    isPc,
    isFireFox,
    isChrome,
    isIOS,
    hasTouch: 'ontouchstart' in globalThis || globalThis.navigator.maxTouchPoints > 0
  }
}

export function generateUUID() {
  if (typeof crypto === 'object') {
    if (typeof crypto.randomUUID === 'function') {
      // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
      return crypto.randomUUID()
    }
    if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
      // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
      const callback = (c) => {
        const num = Number(c)
        return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16)
      }
      return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, callback)
    }
  }
  let timestamp = new Date().getTime()
  let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let random = Math.random() * 16
    if (timestamp > 0) {
      random = (timestamp + random) % 16 | 0
      timestamp = Math.floor(timestamp / 16)
    }
    else {
      random = (perforNow + random) % 16 | 0
      perforNow = Math.floor(perforNow / 16)
    }
    return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16)
  })
}
