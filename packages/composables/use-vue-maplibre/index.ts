/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2024-04-16 17:16:08
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\composables\use-vue-maplibre\index.ts
 */
import { getCurrentInstance, inject } from 'vue'
import useLog from '@vue-maplibre/composables/private/use-log'
import { VmMapProvider } from '@vue-maplibre/utils/types'
import { vmKey } from '@vue-maplibre/utils/private/config'
import { useGlobalConfig } from '../private/use-global-config'

export default function useVueMaplibre(containerId?: string): VmMapProvider {
  const instance = getCurrentInstance()
  const provides = instance?.parent === null ? instance.vnode.appContext && instance.vnode.appContext.provides : (instance?.parent as any)?.provides
  if ((!provides || !(vmKey in provides)) && !containerId) {
    containerId = 'mapContainer'
  }
  const logger = useLog()

  if (instance) {
    const globalConfig = useGlobalConfig()
    if (containerId) {
      const mapProvider = instance.appContext.config.globalProperties?.$VueMaplibre?.[containerId]
      if (!mapProvider) {
        logger.warn(`vm-map with containerId: ${containerId} was not found.`)
      }

      return {
        ...globalConfig.value,
        ...mapProvider
      }
    } else {
      const mapProvider = inject<VmMapProvider>(vmKey)
      return {
        ...globalConfig.value,
        ...mapProvider
      }
    }
  } else {
    logger.warn('useVueMaplibre function can only be used inside setup.')
  }
}
