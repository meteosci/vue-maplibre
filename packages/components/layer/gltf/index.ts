/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:54:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-18 00:16:45
 * @FilePath: \vue-maplibre\packages\components\layer\gltf\index.ts
 */
import { ExtractPropTypes, createCommentVNode, defineComponent, getCurrentInstance, h, watch } from 'vue'
import props from './props'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { useCommon, useLocale } from '@vue-maplibre/composables'
import { GLTFLayerOptions, VmComponentInternalInstance, VmComponentPublicInstance } from '@vue-maplibre/utils/types'
import useLog from '@vue-maplibre/composables/private/use-log'
import { Layer } from '@vue-maplibre/shared'
import { kebabCase } from 'lodash-es'
import { hSlot } from '@vue-maplibre/utils/private/render'
import CustomGLTFLayer from '@vue-maplibre/shared/layer/GLTFLayer'

const emits = {
  ...commonEmits
}

export default defineComponent({
  name: 'VmLayerGltf',
  props,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance() as VmComponentInternalInstance
    const logger = useLog(instance)
    const { t } = useLocale()
    instance.maplibreEvents = []
    instance.className = 'GLTFLayer'
    instance.alreadyListening = []

    const commonState = useCommon(props, ctx, instance)

    if (commonState === void 0) {
      logger.error(`${instance.className} ${t('vm.loadError')}`)
      return
    }

    watch([() => props.position, () => props.rotate, () => props.scale], val => {
      const { map } = commonState.$services
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
      return new Layer.GLTFLayer(props as GLTFLayerOptions)
    }

    instance.mount = async () => {
      const { map } = commonState.$services
      const layer = instance.maplibreObject as CustomGLTFLayer
      map.on('load', () => {
        map.addLayer(layer)
      })

      return true
    }

    instance.unmount = async () => {
      const { map } = commonState.$services
      const layer = instance.maplibreObject as CustomGLTFLayer

      map.removeLayer(layer.id)
      logger.debug('vm-map-unloaded')
      return true
    }
    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(instance.proxy?.$options.name || ''),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VmLayerGltfEmits = typeof emits

export type VmLayerGltfProps = Partial<ExtractPropTypes<typeof props>>

export type VmLayerGltfRef = VmComponentPublicInstance<VmLayerGltfProps>
