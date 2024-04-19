/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-20 15:36:10
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-17 16:38:09
 * @FilePath: \vue-maplibre\packages\components\map\src\index.ts
 */
import {
  ExtractPropTypes,
  VNode,
  computed,
  createCommentVNode,
  defineComponent,
  getCurrentInstance,
  h,
  provide,
  ref,
  withDirectives,
  watch
} from 'vue'
import { Map, MapOptions } from 'maplibre-gl'
import useLog from '@vue-maplibre/composables/private/use-log'
import { VmComponentInternalInstance, VmComponentPublicInstance, VmMapProvider } from '@vue-maplibre/utils/types'
import { kebabCase } from 'lodash-unified'
import { hSlot } from '@vue-maplibre/utils/private/render'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { TouchHold } from '@vue-maplibre/directives'
import mapProps from './props'
import { vmKey } from '@vue-maplibre/utils/private/config'
import mapEmits from './events'
import { useCommon, useLocale } from '@vue-maplibre/composables'
import { getInstanceListener } from '@vue-maplibre/utils/private/vm'
import { mergeDescriptors } from '@vue-maplibre/utils'

const emits = {
  ...commonEmits,
  ...mapEmits,
  'update:zoom': e => true,
  'update:center': e => true,
  'update:bearing': e => true,
  'update:pitch': e => true,
  touchEnd: evt => true
}

export default defineComponent({
  name: 'VmMap',
  props: mapProps,
  emits,

  setup(props, ctx) {
    const instance = getCurrentInstance() as unknown as VmComponentInternalInstance
    const mapRef = ref<HTMLElement>()
    const logger = useLog(instance)
    const { t } = useLocale()
    instance.maplibreEvents = [...Object.keys(mapEmits)]
    instance.className = 'Map'
    instance.alreadyListening = [
      'maxBounds',
      'minZoom',
      'maxZoom',
      'minPitch',
      'maxPitch',
      'center',
      'zoom',
      'bearing',
      'pitch',
      'renderWorldCopies',
      'mapStyle',
      'pixelRatio'
    ]

    // 在这儿 watch 了的都是可以响应式改变的 其他 props 改变会自动判断能不能直接改。
    // 能直接改就直接改。改了也没生效的话需要外部调用 reload 方法。
    // 不能直接改自动调用重载方法重新初始化地图。
    watch(
      () => props.maxBounds,
      val => {
        const map = instance.map
        map && map.setMaxBounds(val)
      },
      {
        deep: true
      }
    )

    watch(
      () => props.minZoom,
      val => {
        const map = instance.map
        map && map.setMinZoom(val)
      }
    )

    watch(
      () => props.maxZoom,
      val => {
        const map = instance.map
        map && map.setMaxZoom(val)
      }
    )

    watch(
      () => props.minPitch,
      val => {
        const map = instance.map
        map && map.setMinPitch(val)
      }
    )

    watch(
      () => props.maxPitch,
      val => {
        const map = instance.map
        map && map.setMaxPitch(val)
      }
    )
    watch(
      () => props.center,
      val => {
        const map = instance.map
        map && map.setCenter(val)
      },
      {
        deep: true
      }
    )

    watch(
      () => props.zoom,
      val => {
        const map = instance.map
        map && map.setZoom(val)
      }
    )

    watch(
      () => props.bearing,
      val => {
        const map = instance.map
        map && map.setBearing(val)
      }
    )

    watch(
      () => props.pitch,
      val => {
        const map = instance.map
        map && map.setPitch(val)
      }
    )

    watch(
      () => props.renderWorldCopies,
      val => {
        const map = instance.map
        map && map.setRenderWorldCopies(val)
      }
    )

    watch(
      () => props.mapStyle,
      val => {
        const map = instance.map
        map && map.setStyle(val)
      }
    )

    watch(
      () => props.pixelRatio,
      val => {
        const map = instance.map
        map && map.setPixelRatio(val)
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
      instance.map.on('zoom', mapChanged)
      instance.map.on('pitch', mapChanged)
      instance.map.on('move', mapChanged)
      return true
    }

    instance.unmount = async () => {
      const { map } = instance

      instance.map.off('zoom', mapChanged)
      instance.map.on('pitch', mapChanged)
      instance.map.on('move', mapChanged)

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

    const mapChanged = e => {
      const map = instance.map
      if (!map) {
        return
      }
      const listenerUpdateZoom = getInstanceListener(instance, 'update:zoom')
      if (listenerUpdateZoom) {
        ctx.emit('update:zoom', map.getZoom())
      }

      const listenerUpdateCenter = getInstanceListener(instance, 'update:center')
      if (listenerUpdateCenter) {
        ctx.emit('update:center', map.getCenter())
      }

      const listenerUpdateBearing = getInstanceListener(instance, 'update:bearing')
      if (listenerUpdateBearing) {
        ctx.emit('update:bearing', map.getBearing())
      }

      const listenerUpdatePitch = getInstanceListener(instance, 'update:pitch')
      if (listenerUpdatePitch) {
        ctx.emit('update:pitch', map.getPitch())
      }
    }

    const getServices = () => {
      return mergeDescriptors(commonState.getServices(), {
        get map() {
          return instance.map
        }
      })
    }

    provide<VmMapProvider>(vmKey, getServices())
    instance.appContext.config.globalProperties.$VueMaplibre = instance.appContext.config.globalProperties.$VueMaplibre || {}
    instance.appContext.config.globalProperties.$VueMaplibre[containerId.value] = getServices()

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
