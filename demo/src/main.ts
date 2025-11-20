import VueMaplibre from '@meteosci/vue-maplibre'
import router from '@router/index'
// Import store and router instances
import { pinia } from '@store/index'
import { ElCascader, ElTreeSelect, provideGlobalConfig } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { AppFullscreen, Dialog, Loading, LocalStorage, Notify, Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-08 23:26:13
 * @LastEditTime: 2024-04-18 22:25:31
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\main.ts
 */
import { createApp } from 'vue'
import VXETable from 'vxe-table'
// import { i18n } from '@src/i18n'
import App from './App.vue'
import { Permission } from './directives'
import '@vue-maplibre/theme-default/src/index.scss'

import 'element-plus/dist/index.css'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import '@src/assets/style/index.scss'

// Import vxe-table library
import 'xe-utils'
import 'vxe-table/lib/style.css'

const app = createApp(App)
app.use(Quasar, {
  plugins: {
    Notify,
    Dialog,
    LocalStorage,
    Loading,
    AppFullscreen
  }, // import Quasar plugins and add here
  lang: quasarLang
})
app.use(ElCascader)
app.use(ElTreeSelect)
provideGlobalConfig(
  {
    locale: zhCn
  },
  app,
  true
)
app.use(VXETable)
// app.use(i18n)
app.use(pinia)
app.use(router)
app.directive('permission', Permission)
app.use(VueMaplibre)
app.mount('#app')
