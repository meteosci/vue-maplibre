/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-20 15:36:10
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-05 17:20:44
 * @FilePath: \vue-maplibre\packages\components\map\src\index.ts
 */
import { mergeDescriptors } from '@vue-maplibre/utils'
import {
  Prop,
  PropType,
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
  withDirectives
} from 'vue'
import { Map, MapOptions, NavigationControl } from 'maplibre-gl'
import useLog from '@vue-maplibre/composables/private/use-log'
import { useGlobalConfig } from '@vue-maplibre/composables/private/use-global-config'
import { VmComponentInternalInstance, VmComponentPublicInstance, VmMapProvider, VmMittEvents, VmReadyObject } from '@vue-maplibre/utils/types'
import { getInstanceListener } from '@vue-maplibre/utils/private/vm'
import { isPlainObject, kebabCase } from 'lodash-unified'
import { hSlot } from '@vue-maplibre/utils/private/render'
import { commonEmits } from '@vue-maplibre/utils/private/emits'
import { TouchHold } from '@vue-maplibre/directives'
import mapProps from './props'
import { vmKey } from '@vue-maplibre/utils/private/config'
import mapEvents from './events'
import mitt, { Emitter } from 'mitt'
import { useEvents } from '@vue-maplibre/composables'

export default defineComponent({
  name: 'VmMap',
  props: mapProps,
  emits: {
    ...commonEmits,
    touchEnd: evt => true
  },
  setup(props, { emit, attrs, slots, expose }) {
    const instance = getCurrentInstance() as VmComponentInternalInstance
    instance.maplibreEvents = [...mapEvents]

    const isReady = ref(false)
    const mapRef = ref<HTMLElement>(null)

    const logger = useLog(instance)
    const globalConfig = useGlobalConfig()
    const { bindEvents, registerEvents } = useEvents(instance, props)

    let createResolve, reject
    const creatingPromise = new Promise<VmMapProvider>((_resolve, _reject) => {
      createResolve = _resolve
      reject = _reject
    })

    const vmMitt: Emitter<VmMittEvents> = mitt()

    const containerId = computed<string>(() => {
      return props.containerId || (instance.attrs.id as string) || 'mapContainer'
    })

    onMounted(async () => {
      try {
        logger.debug('vm-map - onMounted')
        await globalConfig.value?.__mapUnloadingPromise
        load()
          .then(e => {
            createResolve(e)
          })
          .catch(e => {
            emit('unready', e)
            reject(e)
          })
      } catch (e) {
        emit('unready', e)
        reject(e)
      }
    })

    onUnmounted(() => {
      logger.debug('vm-map - onUnmounted')
      unload().then(() => {
        vmMitt.all.clear()
      })
    })

    Object.defineProperties(instance, {
      maplibreObject: {
        enumerable: true,
        get: () => instance.map
      }
    })

    const getServices = function (): VmMapProvider {
      return mergeDescriptors(
        {},
        {
          get map() {
            return instance.map
          },
          get creatingPromise() {
            return creatingPromise
          }
        }
      )
    }

    const beforeLoad = async () => {
      logger.debug('beforeLoad - vm-map')
      const listener = getInstanceListener(instance, 'beforeLoad')
      listener && emit('beforeLoad', instance)
      return Promise.resolve(true)
    }

    const load = async () => {
      logger.debug('vm-map-loading')

      if (instance.mounted) {
        return false
      }

      await beforeLoad()

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
      instance.mounted = true

      const readyObj: VmReadyObject = {
        map
      }

      registerEvents(true)

      const listenerReady = getInstanceListener(instance, 'ready')
      listenerReady && emit('ready', readyObj)
      vmMitt?.emit('ready', readyObj)
      isReady.value = true
      logger.debug('vm-map-loaded')

      Object.assign(instance.proxy, {
        maplibreObject: map
      })

      return readyObj
    }

    const reload = function () {
      return unload().then(() => {
        return load()
      })
    }

    const unload = async function () {
      if (!instance.mounted) {
        return false
      }

      logger.debug('vm-map-unloading')
      let unloadingResolve
      globalConfig.value.__mapUnloadingPromise = new Promise((resolve, reject) => {
        unloadingResolve = resolve
      })

      // If the component has subcomponents, you need to remove the subcomponents first. 如果该组件带有子组件，需要先移除子组件。
      for (let i = 0; i < instance.children.length; i++) {
        const childCmp = instance.children[i].proxy as VmComponentPublicInstance
        await childCmp.unload()
      }

      const { map } = instance

      if (map) {
        registerEvents(false)
        map._controls.forEach(control => {
          map.removeControl(control)
        })
        map.remove()
      }

      instance.children.length = 0
      instance.isUnmounted = false

      const listener = getInstanceListener(instance, 'destroyed')
      listener && emit('destroyed', instance)
      vmMitt.emit('destroyed', instance)
      unloadingResolve(true)
      globalConfig.value.__mapUnloadingPromise = undefined
      isReady.value = false
      logger.debug('vm-map-unloaded')
      return true
    }

    const onTouchHold = e => {
      emit('touchEnd', e)
    }

    provide<VmMapProvider>(vmKey, getServices())
    instance.appContext.config.globalProperties.$VueMaplibre = instance.appContext.config.globalProperties.$VueMaplibre || {}
    instance.appContext.config.globalProperties.$VueMaplibre[containerId.value] = getServices()

    expose({
      creatingPromise,
      load,
      unload,
      reload,
      maplibreObject: instance.maplibreObject,
      getMaplibreObject: () => instance.maplibreObject
    })

    return () => {
      const children: Array<VNode> = []
      // if (isPlainObject(props.skeleton) && !isReady.value) {
      //   children.push(
      //     h(VcSkeleton, {
      //       ...props.skeleton,
      //       style: { background: props.skeleton.color, width: '100%', height: '100%' }
      //     })
      //   )
      // } else {
      //   children.push(createCommentVNode('v-if'))
      // }
      children.push(
        createCommentVNode('vc-viewer'),
        withDirectives(
          h(
            'div',
            {
              ref: mapRef,
              class: kebabCase(instance.proxy?.$options.name || ''),
              id: containerId.value,
              style: attrs.style || { width: '100%', height: '100%' }
            },
            hSlot(slots.default)
          ),
          [[TouchHold, onTouchHold, props.touchHoldArg]]
        )
      )
      return children
    }
  }
})
