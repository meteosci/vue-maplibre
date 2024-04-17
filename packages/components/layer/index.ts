import { App } from 'vue'
import LayerGltf from './gltf'

import { SFCWithInstall } from '@vue-maplibre/utils/types'

const components = [LayerGltf]

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

export const VmLayerGltf = LayerGltf as SFCWithInstall<typeof LayerGltf>

export * from './gltf'
