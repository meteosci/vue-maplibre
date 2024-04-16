/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-16 22:48:17
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-16 22:48:20
 * @FilePath: \vue-maplibre\packages\composables\use-timeout\index.ts
 */
import { onBeforeUnmount } from 'vue'

export default function () {
  let timer

  onBeforeUnmount(() => {
    clearTimeout(timer)
  })

  return {
    registerTimeout(fn, delay) {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    },

    removeTimeout() {
      clearTimeout(timer)
    }
  }
}
