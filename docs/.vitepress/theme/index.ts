/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-08 19:56:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-12 22:43:11
 * @FilePath: \vue-maplibre\docs\.vitepress\theme\index.ts
 */
import ElementPlus from 'element-plus'
import VueMaplibre from '@meteosci/vue-maplibre'

import VPApp, { NotFound, globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import '@meteosci/vue-maplibre/dist/index.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.use(VueMaplibre)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
