/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-20 15:36:10
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-17 02:00:02
 * @FilePath: \vue-maplibre\packages\components\map\src\index.ts
 */
import { mergeDescriptors } from '@vue-maplibre/utils'
import {
  ExtractPropTypes,
  VNode,
  computed,
  createCommentVNode,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  onUnmounted,
  provide,
  ref,
  withDirectives,
  watch,
  WatchStopHandle
} from 'vue'
import { Map, MapOptions } from 'maplibre-gl'
import useLog from '@vue-maplibre/composables/private/use-log'
import { useGlobalConfig } from '@vue-maplibre/composables/private/use-global-config'
import { VmComponentInternalInstance, VmComponentPublicInstance, VmMapProvider, VmReadyObject } from '@vue-maplibre/utils/types'
import { getInstanceListener } from '@vue-maplibre/utils/private/vm'
import { isPlainObject, kebabCase } from 'lodash-unified'
import { hSlot } from '@vue-maplibre/utils/private/render'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { TouchHold } from '@vue-maplibre/directives'
import mapProps from './props'
import { vmKey } from '@vue-maplibre/utils/private/config'
import mapEmits from './events'
import useEvent from '@vue-maplibre/composables/private/use-event'
import { useCommon, useLocale } from '@vue-maplibre/composables'

const emits = { ...commonEmits, ...mapEmits, touchEnd: evt => true }

export default defineComponent({
  name: 'VmMap',
  props: mapProps,
  emits,

  setup(props, ctx) {
    const instance = getCurrentInstance() as VmComponentInternalInstance
    const mapRef = ref<HTMLElement>()
    const logger = useLog(instance)
    const { t } = useLocale()
    instance.maplibreEvents = [...Object.keys(mapEmits)]
    instance.className = 'Map'
    instance.alreadyListening = ['zoom']

    watch(
      () => props.zoom,
      val => {
        instance.map && instance.map.setZoom(val)
      }
    )

    const commonState = useCommon(props, ctx, instance)

    if (commonState === void 0) {
      logger.error(`${instance.className} ${t('vm.loadError')}`)
      return
    }

    const containerId = computed<string>(() => {
      return props.containerId || (instance.attrs.id as string) || 'mapContainer'
    })

    instance.createMaplibreObject = async () => {
      const options: MapOptions = {
        container: mapRef.value,
        style: props.mapStyle
      }

      Object.keys(props).forEach(vueProp => {
        if (props[vueProp] === undefined || props[vueProp] === null) {
          return
        }
        options[vueProp] = props[vueProp]
      })

      const map = new Map(options)

      instance.map = map

      return map
    }

    instance.mount = async () => {
      return true
    }

    instance.unmount = async () => {
      const { map } = instance

      if (map) {
        map._controls.forEach(control => {
          map.removeControl(control)
        })
        map.remove()
      }

      // globalConfig.value.__mapUnloadingPromise = undefined
      logger.debug('vm-map-unloaded')
      return true
    }

    const onTouchHold = e => {
      ctx.emit('touchEnd', e)
    }

    provide<VmMapProvider>(vmKey, commonState.getServices())
    instance.appContext.config.globalProperties.$VueMaplibre = instance.appContext.config.globalProperties.$VueMaplibre || {}
    instance.appContext.config.globalProperties.$VueMaplibre[containerId.value] = commonState.getServices()

    return () => {
      const children: Array<VNode> = []

      children.push(
        createCommentVNode('vm-map'),
        withDirectives(
          h(
            'div',
            {
              ref: mapRef,
              class: kebabCase(instance.proxy?.$options.name || ''),
              id: containerId.value,
              style: ctx.attrs.style || { width: '100%', height: '100%' }
            },
            hSlot(ctx.slots.default)
          ),
          [[TouchHold, onTouchHold, props.touchHoldArg]]
        )
      )
      return children
    }
  }
})

export type VmMapEmits = typeof emits

export type VmMapProps = Partial<ExtractPropTypes<typeof mapProps>>

export type VcViewerRef = VmComponentPublicInstance<VmMapProps>

export interface VmMapSlots {
  /**
   * Default slot content of the component.
   */
  default: () => VNode[]
}
