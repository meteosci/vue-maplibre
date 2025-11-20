import type { SFCWithInstall } from '@vue-maplibre/utils/types'
import type { App } from 'vue'
import ControlNavigation from './navigation'
import ControlTerrain from './terrain'

const components = [ControlNavigation, ControlTerrain]

function install(app: App): void {
  components.forEach((cmp) => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach((cmp) => {
  cmp.install = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VmControlNavigation = ControlNavigation as SFCWithInstall<typeof ControlNavigation>
export const VmControlTerrain = ControlTerrain as SFCWithInstall<typeof ControlTerrain>

export * from './navigation'
export * from './terrain'
