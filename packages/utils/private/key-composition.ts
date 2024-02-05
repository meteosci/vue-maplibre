/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-04 14:32:55
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-04 14:33:14
 * @FilePath: \vue-maplibre\packages\utils\private\key-composition.ts
 */

let lastKeyCompositionStatus = false

export function onKeyDownComposition(evt) {
  lastKeyCompositionStatus = evt.isComposing === true
}

export function shouldIgnoreKey(evt) {
  return lastKeyCompositionStatus === true || evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true
}

export function isKeyCode(evt, keyCodes) {
  return shouldIgnoreKey(evt) === true ? false : ([] as any).concat(keyCodes).includes(evt.keyCode)
}
