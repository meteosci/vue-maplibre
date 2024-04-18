/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-18 11:52:22
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-18 11:52:34
 * @FilePath: \vue-maplibre\packages\components\control\index.ts
 */
import { App } from 'vue'
import ControlNavigation from './navigation'

import { SFCWithInstall } from '@vue-maplibre/utils/types'

const components = [ControlNavigation]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach(cmp => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VmControlNavigation = ControlNavigation as SFCWithInstall<typeof ControlNavigation>

export * from './navigation'