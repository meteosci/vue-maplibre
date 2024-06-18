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
  const isWindowsPhone = /(?:Windows Phone)/.test(ua)
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  const isAndroid = /(?:Android)/.test(ua)
  const isFireFox = /(?:Firefox)/.test(ua)
  const isChrome = /(?:Chrome|CriOS)/.test(ua)
  const isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet
  const isPc = !isPhone && !isAndroid && !isSymbian
  const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
    isFireFox: isFireFox,
    isChrome: isChrome,
    isIOS,
    hasTouch: 'ontouchstart' in globalThis || globalThis.navigator.maxTouchPoints > 0
  }
}
