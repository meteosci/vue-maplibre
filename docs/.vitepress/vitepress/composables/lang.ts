/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-08 19:56:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-12 22:05:12
 * @FilePath: \vue-maplibre\docs\.vitepress\vitepress\composables\lang.ts
 */
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { defaultLang } from '../constant'

export const useLang = () => {
  const route = useRoute()
  return computed(() => {
    // the first part of the first slash
    const path = route.data?.relativePath
    let lang: string

    if (path?.includes('/')) {
      lang = path.split('/').shift()! || defaultLang
    } else {
      lang = defaultLang
    }
    return lang
  })
}
