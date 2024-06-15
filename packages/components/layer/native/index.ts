/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:54:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-15 17:26:38
 * @FilePath: \vue-maplibre\packages\components\layer\native\index.ts
 */
import { ExtractPropTypes, createCommentVNode, defineComponent, getCurrentInstance, h, watch } from 'vue'
import props from './props'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { useCommon, useLocale } from '@vue-maplibre/composables'
import { AnyObject, VmComponentInternalInstance, VmComponentPublicInstance, VmReadyObject } from '@vue-maplibre/utils/types'
import useLog from '@vue-maplibre/composables/private/use-log'
import { kebabCase } from 'lodash-es'
import { AddLayerObject } from 'maplibre-gl'

const emits = {
  ...commonEmits
}

export default defineComponent({
  name: 'VmLayerNative',
  props,
  emits,
  setup(props: VmLayerNativeProps, ctx) {
    const instance = getCurrentInstance() as unknown as VmComponentInternalInstance
    const logger = useLog(instance)
    const { t } = useLocale()
    instance.maplibreEvents = []
    instance.className = 'VmLayerNative'
    instance.alreadyListening = ['layout', 'paint']

    const commonState = useCommon(props, ctx, instance)

    if (commonState === void 0) {
      logger.error(`${instance.className} ${t('vm.loadError')}`)
      return
    }

    watch(
      () => props.layout,
      val => {
        const { map } = commonState.$services
        const keys = Object.keys(val)
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i]
          map.setLayoutProperty(props.id, key, val[key])
        }
      },
      {
        deep: true
      }
    )

    watch(
      () => props.layout,
      val => {
        const { map } = commonState.$services
        const keys = Object.keys(val)
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i]
          map.setLayoutProperty(props.id, key, val[key])
        }
      },
      {
        deep: true
      }
    )

    watch(
      () => props.paint,
      val => {
        const { map } = commonState.$services
        const keys = Object.keys(val)
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i]
          map.setPaintProperty(props.id, key, val[key])
        }
      },
      {
        deep: true
      }
    )

    instance.createMaplibreObject = async () => {
      logger.debug(`${instance.proxy?.$options.name}-creating`)
      const { map } = commonState.$services

      const layerOptions = {
        type: props.type,
        ...props
      } as AddLayerObject

      const options: AnyObject = {}

      Object.keys(props).forEach(vueProp => {
        if (props[vueProp] === undefined || props[vueProp] === null) {
          return
        }
        options[vueProp] = props[vueProp]
      })

      map.addLayer(options as AddLayerObject)

      return map.getLayer(layerOptions.id)
    }

    instance.mount = async () => {
      logger.debug(`${instance.proxy?.$options.name}-mounted`)
      return true
    }

    instance.unmount = async () => {
      const { map } = commonState.$services
      map.removeLayer(props.id)
      logger.debug(`${instance.proxy?.$options.name}-unmounted`)
      return true
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VmLayerNativeEmits = typeof emits

export type VmLayerNativeProps = Partial<
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
      /**
       onReady: (readyObj: VmReadyObject) => void
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

export type VmLayerNativeRef = VmComponentPublicInstance<VmLayerNativeProps>
