/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:54:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-08-18 17:46:06
 * @FilePath: \vue-maplibre\packages\components\control\navigation\index.ts
 */
import type { VmComponentInternalInstance, VmComponentPublicInstance, VmReadyObject } from '@vue-maplibre/utils/types'
import type { NavigationControlOptions } from 'maplibre-gl'
import type { ExtractPropTypes } from 'vue'
import { useCommon, useLocale } from '@vue-maplibre/composables'
import { logger } from '@vue-maplibre/utils'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { kebabCase } from 'lodash-unified'
import { NavigationControl } from 'maplibre-gl'
import { createCommentVNode, defineComponent, getCurrentInstance, watch } from 'vue'
import props from './props'

const emits = {
  ...commonEmits
}

export default defineComponent({
  name: 'VmControlNavigation',
  props,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance() as unknown as VmComponentInternalInstance
    const { t, locale } = useLocale()
    instance.maplibreEvents = []
    instance.className = 'NavigationControl'
    instance.alreadyListening = []
    instance.mapRequired = true

    const commonState = useCommon(props, ctx, instance)

    if (commonState === void 0) {
      logger.error(`${instance.className} ${t('vm.loadError')}`)
      return
    }

    instance.createMaplibreObject = async () => {
      logger.debug(`${instance.proxy?.$options.name}-creating`)
      return new NavigationControl(props as NavigationControlOptions)
    }

    instance.mount = async () => {
      const $services = commonState.getServices()
      const { map } = $services

      const control = instance.maplibreObject as NavigationControl
      map.addControl(control, props.position)
      logger.debug(`${instance.proxy?.$options.name}-mounted`)
      return true
    }

    instance.unmount = async () => {
      const $services = commonState.getServices()
      const { map } = $services
      const control = instance.maplibreObject as NavigationControl

      map.removeControl(control)
      logger.debug(`${instance.proxy?.$options.name}-unmounted`)
      return true
    }

    watch(
      () => locale.value,
      (val) => {
        const control = instance.maplibreObject as NavigationControl
        if (control) {
          commonState.reload()
        }
      }
    )

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VmControlNavigationEmits = typeof emits

export type VmControlNavigationProps = Partial<
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

export type VmControlNavigationRef = VmComponentPublicInstance<VmControlNavigationProps>
