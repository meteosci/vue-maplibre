/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:54:27
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-21 20:14:03
 * @FilePath: \vue-maplibre\packages\components\layer\symbol\index.ts
 */
import { ExtractPropTypes, createCommentVNode, defineComponent, getCurrentInstance, h, watch } from 'vue'
import props from './props'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { useCommon, useLocale } from '@vue-maplibre/composables'
import { VmComponentInternalInstance, VmComponentPublicInstance } from '@vue-maplibre/utils/types'
import useLog from '@vue-maplibre/composables/private/use-log'
import { kebabCase } from 'lodash-es'
import { AddLayerObject } from 'maplibre-gl'

const emits = {
  ...commonEmits
}

export default defineComponent({
  name: 'VmLayerSymbol',
  props,
  emits,
  setup(props: VmLayerSymbolProps, ctx) {
    const instance = getCurrentInstance() as unknown as VmComponentInternalInstance
    const logger = useLog(instance)
    const { t } = useLocale()
    instance.maplibreEvents = []
    instance.className = 'SymbolStyleLayer'
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
        type: 'symbol',
        ...props
      } as AddLayerObject

      map.addLayer(layerOptions, props.beforeId)

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

export type VmLayerSymbolEmits = typeof emits

export type VmLayerSymbolProps = Partial<ExtractPropTypes<typeof props>>

export type VmLayerSymbolRef = VmComponentPublicInstance<VmLayerSymbolProps>
