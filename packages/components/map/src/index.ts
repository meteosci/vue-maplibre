/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-20 15:36:10
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-02-24 21:52:42
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
import { VmComponentInternalInstance, VmComponentPublicInstance, VmMapProvider, VmReadyObject } from '@vue-maplibre/utils/types'
import { kebabCase } from 'lodash-unified'
import { hSlot } from '@vue-maplibre/utils/private/render'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { TouchHold } from '@vue-maplibre/directives'
import mapProps from './props'
import { vmKey } from '@vue-maplibre/utils/private/config'
import mapEmits from './events'
import { useCommon, useLocale, useVueMaplibre } from '@vue-maplibre/composables'
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
    const { t, locale } = useLocale()
    instance.maplibreEvents = [...Object.keys(mapEmits)]
    instance.className = 'Map'
    instance.nowaiting = true

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

    const $vm = useVueMaplibre()

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

    watch(
      () => locale.value,
      val => {
        const map = instance.map
        if (map) {
          map._locale = val.vm.mapLocale as any
        }
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

      if (!options.locale) {
        options.locale = locale.value.vm.mapLocale
      }

      const map = new Map(options)

      instance.map = map

      // console.log('更新存储的地图实例')
      instance.appContext.config.globalProperties.$VueMaplibre[containerId.value] = getServices()

      return map
    }

    instance.mount = async () => {
      instance.map.on('zoom', mapChanged)
      instance.map.on('pitch', mapChanged)
      instance.map.on('move', mapChanged)

      instance.map.on('load', () => {
        $vm.vmMitt.emit('__vue_maplibre_vm_map_ready__', instance.map)
      })

      return true
    }

    instance.unmount = async () => {
      const { map } = instance

      instance.map.off('zoom', mapChanged)
      instance.map.off('pitch', mapChanged)
      instance.map.off('move', mapChanged)

      if (map) {
        map._controls.forEach(control => {
          map.removeControl(control)
        })
        map.remove()

        // console.log('删除存储的旧地图实例')
        if (instance.appContext.config.globalProperties.$VueMaplibre[containerId.value]) {
          const $vm = instance.appContext.config.globalProperties.$VueMaplibre[containerId.value]
          const map = $vm?.map

          if (map) {
            // 如果地图不为空，说明地图实例还在，需要销毁。否则说明地图正在初始化，不能删除了。
            delete instance.appContext.config.globalProperties.$VueMaplibre[containerId.value]
          }
        }
      }

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

    // console.log('存储新的地图实例')
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

export type VmMapProps = Partial<
  ExtractPropTypes<
    typeof mapProps & {
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
      /**
       * Triggers when the zoom changed.
       * @param zoom
       * @returns
       */
      'onUpdate:zoom': (zoom: number) => void
      /**
       * Triggers when the center changed.
       * @param center
       * @returns
       */
      'onUpdate:center': (center: number) => void
      /**
       * Triggers when the bearing changed.
       * @param bearing
       * @returns
       */
      'onUpdate:bearing': (bearing: number) => void
      /**
       * Triggers when the pitch changed.
       * @param pitch
       * @returns
       */
      'onUpdate:pitch': (pitch: number) => void
      /**
       * Triggers when touch end.
       * @param evt
       * @returns
       */
      onTouchEnd: (evt: TouchEvent) => void
    }
  >
>

export type VmMapRef = VmComponentPublicInstance<VmMapProps>

export interface VmMapSlots {
  /**
   * Default slot content of the component.
   */
  default: () => VNode[]
}
