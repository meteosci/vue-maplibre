/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:54:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-28 23:29:25
 * @FilePath: \vue-maplibre\packages\components\layer\gltf\index.ts
 */
import type CustomGLTFLayer from '@vue-maplibre/shared/layer/GLTFLayer'
import type { GLTFLayerOptions, VmComponentInternalInstance, VmComponentPublicInstance, VmReadyObject } from '@vue-maplibre/utils/types'
import type { ExtractPropTypes } from 'vue'
import { useCommon, useLocale } from '@vue-maplibre/composables'
import { Layer } from '@vue-maplibre/shared'
import { logger } from '@vue-maplibre/utils'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { kebabCase } from 'lodash-unified'
import { createCommentVNode, defineComponent, getCurrentInstance, watch } from 'vue'
import props from './props'

const emits = {
  ...commonEmits,
  loaded: e => true
}

export default defineComponent({
  name: 'VmLayerGltf',
  props,
  emits,
  setup(props: VmLayerGltfProps, ctx) {
    const instance = getCurrentInstance() as unknown as VmComponentInternalInstance
    const { t } = useLocale()
    instance.maplibreEvents = ['loaded']
    instance.className = 'GLTFLayer' // 最终其实是 CustomStyleLayer
    instance.alreadyListening = []
    instance.mapRequired = true

    const commonState = useCommon(props, ctx, instance)

    if (commonState === void 0) {
      logger.error(`${instance.className} ${t('vm.loadError')}`)
      return
    }

    watch([() => props.position, () => props.rotate, () => props.scale], (val) => {
      const $services = commonState.getServices()
      const { map } = $services

      const layer = instance.maplibreObject as CustomGLTFLayer

      if (map && layer) {
        layer.changeOptions({
          position: props.position,
          rotate: props.rotate,
          scale: props.scale
        })
      }
    })

    instance.createMaplibreObject = async () => {
      logger.debug(`${instance.proxy?.$options.name}-creating`)
      return new Layer.GLTFLayer(props as GLTFLayerOptions)
    }

    instance.mount = async () => {
      const $services = commonState.getServices()
      const { map } = $services

      const layer = instance.maplibreObject as CustomGLTFLayer
      map.addLayer(layer)
      logger.debug(`${instance.proxy?.$options.name}-mounted`)
      return true
    }

    instance.unmount = async () => {
      const $services = commonState.getServices()
      const { map } = $services
      const layer = instance.maplibreObject as CustomGLTFLayer

      if (map.getLayer(layer.id)) {
        map.removeLayer(layer.id)
      }

      logger.debug(`${instance.proxy?.$options.name}-unmounted`)
      return true
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VmLayerGltfEmits = typeof emits

export type VmLayerGltfProps = Partial<
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
      onLoaded: (e: any) => void
    }
  >
>

export type VmLayerGltfRef = VmComponentPublicInstance<VmLayerGltfProps>
