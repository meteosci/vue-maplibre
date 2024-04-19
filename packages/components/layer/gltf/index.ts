/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:54:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-18 11:51:16
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
import CustomGLTFLayer from '@vue-maplibre/shared/layer/GLTFLayer'

const emits = {
  ...commonEmits
}

export default defineComponent({
  name: 'VmLayerGltf',
  props,
  emits,
  setup(props, ctx) {
    const instance = getCurrentInstance() as unknown as VmComponentInternalInstance
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
      logger.debug(`${instance.proxy?.$options.name}-creating`)
      return new Layer.GLTFLayer(props as GLTFLayerOptions)
    }

    instance.mount = async () => {
      const { map } = commonState.$services
      const layer = instance.maplibreObject as CustomGLTFLayer
      map.on('style.load', () => {
        map.addLayer(layer)
      })
      logger.debug(`${instance.proxy?.$options.name}-mounted`)
      return true
    }

    instance.unmount = async () => {
      const { map } = commonState.$services
      const layer = instance.maplibreObject as CustomGLTFLayer

      map.removeLayer(layer.id)
      logger.debug(`${instance.proxy?.$options.name}-unmounted`)
      return true
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VmLayerGltfEmits = typeof emits

export type VmLayerGltfProps = Partial<ExtractPropTypes<typeof props>>

export type VmLayerGltfRef = VmComponentPublicInstance<VmLayerGltfProps>
