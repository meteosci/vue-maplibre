/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:54:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-29 17:28:58
 * @FilePath: \vue-maplibre\packages\components\control\terrain\index.ts
 */
import type { VmComponentInternalInstance, VmComponentPublicInstance, VmReadyObject } from '@vue-maplibre/utils/types'
import type { TerrainSpecification } from 'maplibre-gl'
import type { ExtractPropTypes } from 'vue'
import { useCommon, useLocale } from '@vue-maplibre/composables'
import { logger } from '@vue-maplibre/utils'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { kebabCase } from 'lodash-unified'
import { TerrainControl } from 'maplibre-gl'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import props from './props'

const emits = {
  ...commonEmits
}

export default defineComponent({
  name: 'VmControlTerrain',
  props,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance() as unknown as VmComponentInternalInstance
    const { t } = useLocale()
    instance.maplibreEvents = []
    instance.className = 'TerrainControl'
    instance.alreadyListening = []
    instance.mapRequired = true

    const commonState = useCommon(props, ctx, instance)

    if (commonState === void 0) {
      logger.error(`${instance.className} ${t('vm.loadError')}`)
      return
    }

    instance.createMaplibreObject = async () => {
      logger.debug(`${instance.proxy?.$options.name}-creating`)
      return new TerrainControl(props as TerrainSpecification)
    }

    instance.mount = async () => {
      const $services = commonState.getServices()
      const { map } = $services

      const control = instance.maplibreObject as TerrainControl
      map.addControl(control, props.position)
      logger.debug(`${instance.proxy?.$options.name}-mounted`)
      return true
    }

    instance.unmount = async () => {
      const $services = commonState.getServices()
      const { map } = $services

      const control = instance.maplibreObject as TerrainControl
      map.removeControl(control)
      logger.debug(`${instance.proxy?.$options.name}-unmounted`)
      return true
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VmControlTerrainEmits = typeof emits

export type VmControlTerrainProps = Partial<
  ExtractPropTypes<
    typeof props & {
      /**
       * Triggers before the maplibreObject is loaded.
       * @param instance
       * @returns
       */
      onBeforeLoad: (instance: VmComponentInternalInstance) => void
      /**
       * Triggers when the maplibreObject is successfully loaded.
       * @param readyObj
       * @returns
       */
      onReady: (readyObj: VmReadyObject) => void
      /**
       * Triggers when the maplibreObject loading failed.
       * @param e
       * @returns
       */
      onUnready: (e: any) => void
      /**
       * Triggers when the maplibreObject is destroyed.
       * @param instance
       * @returns
       */
      onDestroyed: (instance: VmComponentInternalInstance) => void
    }
  >
>

export type VmControlTerrainRef = VmComponentPublicInstance<VmControlTerrainProps>
