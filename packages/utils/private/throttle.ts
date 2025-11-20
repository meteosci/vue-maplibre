/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-04 14:33:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-29 18:11:41
 * @FilePath: \vue-maplibre\packages\utils\private\throttle.ts
 */

export default function (fn, limit = 250) {
  let wait = false
  let result

  return function (this /* ...args */) {
    if (wait === false) {
      wait = true
      setTimeout(() => {
        wait = false
      }, limit)
      // eslint-disable-next-line prefer-rest-params
      result = fn.apply(this, arguments)
    }

    return result
  }
}
