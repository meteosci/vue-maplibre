/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:54:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-19 23:48:51
 * @FilePath: \vue-maplibre\packages\components\control\navigation\index.ts
 */
import { ExtractPropTypes, createCommentVNode, defineComponent, getCurrentInstance, h, watch } from 'vue'
import props from './props'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { useCommon, useLocale } from '@vue-maplibre/composables'
import { VmComponentInternalInstance, VmComponentPublicInstance } from '@vue-maplibre/utils/types'
import useLog from '@vue-maplibre/composables/private/use-log'
import { kebabCase } from 'lodash-es'
import { NavigationControl, type NavigationControlOptions } from 'maplibre-gl'

const emits = {
  ...commonEmits
}

export default defineComponent({
  name: 'VmControlNavigation',
  props,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance() as unknown as VmComponentInternalInstance
    const logger = useLog(instance)
    const { t } = useLocale()
    instance.maplibreEvents = []
    instance.className = 'NavigationControl'
    instance.alreadyListening = []

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
      const { map } = commonState.$services
      const control = instance.maplibreObject as NavigationControl
      map.addControl(control)
      logger.debug(`${instance.proxy?.$options.name}-mounted`)
      return true
    }

    instance.unmount = async () => {
      const { map } = commonState.$services
      const control = instance.maplibreObject as NavigationControl

      map.removeControl(control)
      logger.debug(`${instance.proxy?.$options.name}-unmounted`)
      return true
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VmControlNavigationEmits = typeof emits

export type VmControlNavigationProps = Partial<ExtractPropTypes<typeof props>>

export type VmControlNavigationRef = VmComponentPublicInstance<VmControlNavigationProps>
