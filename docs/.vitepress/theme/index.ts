/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-08 19:56:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-14 18:07:22
 * @FilePath: \vue-maplibre\docs\.vitepress\theme\index.ts
 */
import ElementPlus from 'element-plus'
import VueMaplibre from '@meteosci/vue-maplibre'
import VPApp, { NotFound, globals } from '../vitepress'
import { define } from '../utils/types'
import type { Theme } from 'vitepress'

import 'uno.css'
import './style.css'
import '@vue-maplibre/theme-default/src/index.scss'
import './normalize.scss'


export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.use(VueMaplibre)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
})
