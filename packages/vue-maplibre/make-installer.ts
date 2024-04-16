/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2024-04-16 17:09:36
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\vue-maplibre\make-installer.ts
 */
import { version } from './version'
import type { App, Plugin } from 'vue'
import { provideGlobalConfig } from '@vue-maplibre/composables/private/use-global-config'
import useLog from '@vue-maplibre/composables/private/use-log'
import mitt, { Emitter } from 'mitt'
import { ConfigProviderContext, VmMittEvents } from '@vue-maplibre/utils/types'
const logger = useLog(undefined)

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, opts?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return

    const vmMitt: Emitter<VmMittEvents> = mitt()

    const defaultConfig: ConfigProviderContext = {
      vmMitt
    }

    app[INSTALLED_KEY] = true

    const options = Object.assign(defaultConfig, opts)

    components.forEach(c => {
      app.use(c, options)
    })

    provideGlobalConfig(options, app, true)

    if (process.env.NODE_ENV === 'development') {
      logger.capsule('VueMaplibre', `v${version}`)
      logger.success('VueMaplibre  https://github.com/meteosci/vue-maplibre')
      // logger.success('Document  https://zouyaoji.top/vue-cesium')
      logger.success(`If you like it, give it a star reward, ^_^`)
      logger.success(`表示赞，给它一个星星奖励，^_^`)
    }
  }

  return {
    version,
    install
  }
}

export default makeInstaller
