/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2024-04-16 17:09:36
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\vue-maplibre\make-installer.ts
 */
import type { ConfigProviderContext, VmMittEvents } from '@vue-maplibre/utils/types'
import type { Emitter } from 'mitt'
import type { App, Plugin } from 'vue'
import { provideGlobalConfig } from '@vue-maplibre/composables/private/use-global-config'
import { logger } from '@vue-maplibre/utils'
import mitt from 'mitt'
import { version } from './version'

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

function makeInstaller(components: Plugin[] = []) {
  const install = (app: App, opts?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY])
      return

    const vmMitt: Emitter<VmMittEvents> = mitt()

    const defaultConfig: ConfigProviderContext = {
      $q: app.config.globalProperties?.$q,
      showNotify: false,
      debug: false,
      vmMitt
    }

    app[INSTALLED_KEY] = true

    const options = Object.assign(defaultConfig, opts)

    components.forEach((c) => {
      app.use(c, options)
    })

    provideGlobalConfig(options, app, true)

    logger.capsule('VueMaplibre', `v${version}`)
    logger.success('VueMaplibre  https://github.com/meteosci/vue-maplibre')
    logger.success(`If you like it, give it a star reward, ^_^`)
  }

  return {
    version,
    install
  }
}

export default makeInstaller
