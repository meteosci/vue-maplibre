import type { Theme } from 'vitepress'
import VueMaplibre from '@meteosci/vue-maplibre'
import { isClient } from '@vueuse/core'
import ElementPlus, {
  ID_INJECTION_KEY,
  ZINDEX_INJECTION_KEY
} from 'element-plus'
import { define } from '../utils/types'
import VPApp, { globals, NotFound } from '../vitepress'
import 'uno.css'
import './style.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'virtual:group-icons.css'
// 本地
// import '@vue-maplibre/theme-default/src/index.scss'
// npm
import '@meteosci/vue-maplibre/dist/index.css'
import './normalize.scss'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: async ({ app, router }) => {
    app.use(ElementPlus)
    app.use(VueMaplibre)
    app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
    app.provide(ZINDEX_INJECTION_KEY, { current: 0 })
    Object.entries(globals).forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
    if (!isClient)
      return
    const nprogress = await import('nprogress')
    router.onBeforeRouteChange = nprogress.start
    router.onAfterRouteChange = nprogress.done
  }
})
