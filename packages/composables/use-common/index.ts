/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-16 22:46:21
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-02-24 22:03:47
 * @FilePath: \vue-maplibre\packages\composables\use-common\index.ts
 */
import { VmComponentInternalInstance, VmComponentPublicInstance, VmMapProvider, VmMittEvents, VmReadyObject } from '@vue-maplibre/utils/types'
import useLog from '../private/use-log'
import useTimeout from '../use-timeout'
import useVueMaplibre from '../use-vue-maplibre'
import { useLocale } from '../use-locale'
import useEvent from '@vue-maplibre/composables/private/use-event'
import { getVmParentInstance } from '@vue-maplibre/utils/private/vm'
import { isEqual, isFunction } from 'lodash-unified'
import { WatchStopHandle, inject, onUnmounted, onMounted } from 'vue'
import { mergeDescriptors } from '@vue-maplibre/utils/merge-descriptors'
import { Map } from 'maplibre-gl'
import { vmKey } from '@vue-maplibre/utils/private/config'
import mitt, { Emitter } from 'mitt'
import { useGlobalConfig } from '@vue-maplibre/composables/use-global-config'

export default function (props, { emit, attrs }, instance: VmComponentInternalInstance) {
  const logger = useLog(instance)
  const { t } = useLocale()
  const $vm = useVueMaplibre()
  if ($vm === undefined) {
    logger.error(`${instance.className} ${t('vm.loadError')}`)
    return
  }

  const isMapRoot = instance.className === 'Map'

  const { registerTimeout, removeTimeout } = useTimeout()

  instance.mounted = false
  instance.children = []
  instance.removeCallbacks = []
  const unwatchFns: Array<WatchStopHandle> = []

  // instance.vmMitt = isMapRoot ? $vm.vmMitt : mitt()
  instance.vmMitt = mitt()
  const parentInstance = isMapRoot ? instance : getVmParentInstance(instance)
  const { bindEvents, registerEvents } = useEvent(instance, props)
  const globalConfig = useGlobalConfig()

  const beforeLoad = async () => {
    emit('beforeLoad', instance)

    if (parentInstance.nowaiting) {
      return Promise.resolve(true)
    } else {
      await (parentInstance.proxy as VmComponentPublicInstance).creatingPromise
    }
  }

  const load = async () => {
    // Returns if it is already loaded. 如果已经加载则返回。
    if (instance.mounted) {
      return Promise.resolve(false)
    }

    logger.debug(`${instance.className}---loading`)

    await beforeLoad()

    const { map } = $vm
    instance.map = map

    // If you call the unload method to unload the component, the instance of the parent component may be unloaded. You need to load the parent component first.
    // 如果调用过 unload 方法卸载组件，父组件的对象可能会被卸载 需要先加载父组件。
    if (!parentInstance.maplibreObject && !parentInstance.nowaiting && !isMapRoot && parentInstance.className) {
      return await (parentInstance.proxy as VmComponentPublicInstance)?.load()
    }

    setPropsWatcher(true)

    return createMaplibreObject().then(async maplibreObject => {
      instance.maplibreObject = maplibreObject
      return mount().then((): VmReadyObject => {
        instance.mounted = true
        if (!isMapRoot && parentInstance?.children) {
          parentInstance.children.push(instance)
        }
        Object.assign(instance.proxy, {
          maplibreObject: instance.maplibreObject
        })
        // Trigger the component's 'ready' event. 触发该组件的 'ready' 事件。
        const readyObj: VmReadyObject = isMapRoot ? { map: maplibreObject as Map, vm: instance } : { map: $vm.map, maplibreObject, vm: instance }
        emit('ready', readyObj)
        instance.vmMitt.emit('__vue_maplibre_parent_component_ready__', readyObj)
        logger.debug(`${instance.className}---loaded`)
        return readyObj
      })
    })
  }

  const beforeUnload = async () => {
    await instance.unloadingPromise
  }

  // eslint-disable-next-line arrow-parens
  const unload = async () => {
    await beforeUnload()

    // If the component has subcomponents, you need to remove the subcomponents first. 如果该组件带有子组件，需要先移除子组件。
    for (let i = 0; i < instance.children.length; i++) {
      const childCmp = instance.children[i].proxy as VmComponentPublicInstance
      await childCmp.unload()
    }

    instance.children.length = 0
    // ensure custom events can be emitted after unmount.
    // https://github.com/vuejs/core/issues/5674
    instance.isUnmounted = false
    return instance.mounted
      ? unmount().then(async () => {
          setPropsWatcher(false)
          instance.maplibreObject = undefined
          instance.mounted = false
          instance.removeCallbacks.forEach(removeCallback => {
            removeCallback()
          })

          emit('destroyed', instance)
          instance.vmMitt.emit('destroyed', instance)

          logger.debug(`${instance.className}---unmounted`)

          // If the component cannot be rendered without the parent component, the parent component needs to be removed.
          // 如果该组件的渲染和父组件是绑定在一起的，需要移除父组件。
          return instance.renderByParent && !instance.unloadingPromise ? (parentInstance.proxy as VmComponentPublicInstance).unload() : true
        })
      : false
  }

  const beforeReload = async () => {
    await instance.reloadingPromise
  }

  const reload = async () => {
    await beforeReload()

    return unload().then(() => {
      return load()
    })
  }

  const mount = async () => {
    registerEvents(true, props.eventLayerId)
    return instance.mount?.() || true
  }

  const unmount = async () => {
    registerEvents(false)
    return instance.unmount?.() || true
  }

  const setPropsWatcher = register => {
    if (register) {
      if (!instance.className) {
        return
      }

      props &&
        Object.keys(props).forEach(vueProp => {
          let prop = vueProp
          if (vueProp === 'mapStyle') {
            prop = 'style'
          }
          // 如果在vue文件中已经监听了该 prop 这儿不再监听了
          // If you have listened to the props in the vue file, you will not add any more listeners here.
          if (instance.proxy?.$options.watch?.[vueProp] || instance.alreadyListening.indexOf(vueProp) !== -1) {
            return
          }

          const watcherOptions = instance.proxy?.$options.props[vueProp]?.watcherOptions
          // returns an unwatch function that stops firing the callback
          const unwatch = instance.proxy?.$watch(
            vueProp,
            async (val, oldVal) => {
              // Wait for child components to be created.
              // 等待子组件创建完成。否则在父组件的 `ready` 事件中就改变的属性将不起作用。
              await (instance.proxy as VmComponentPublicInstance).creatingPromise
              const { maplibreObject } = instance
              // Get the writability of the current cesiumobject or the props on its prototype chain to
              // detect whether the component property responds dynamically or reloads the component when the property changes.
              // 通过 cesiumObject 对象或它原型链上的 prop 的可写性，以检测属性改变时组件属性是动态响应还是重载组件。
              const pd = maplibreObject && Object.getOwnPropertyDescriptor(maplibreObject, prop)
              const pdProto = maplibreObject && Object.getOwnPropertyDescriptor(Object.getPrototypeOf(maplibreObject), prop)
              const hasSetter = (pd && (pd.writable || pd.set)) || (pdProto && (pdProto.writable || pdProto.set))
              if (hasSetter) {
                // Attributes are writable and directly respond to changes in attributes.
                // 属性可写，直接动态响应属性的改变。
                maplibreObject[prop] = transformProp(prop, val)
                return true
              } else {
                // The attribute is not writable, and the property is changed indirectly through reloading the component.
                // 属性不可写，通过重加载组件间接实现改变属性
                if (!isEqual(val, oldVal) || Array.isArray(val)) {
                  if (attrs['reload-mode'] === 'once' || attrs['reloadMode'] === 'once' || $vm.reloadMode === 'once') {
                    // If multiple component properties are changed at once, reload only once after the last property has been changed.
                    // 如果一瞬间多个组件属性被改变，只在最后一个属性改变完后 reload 一次。
                    removeTimeout()
                    registerTimeout(() => {
                      ;(instance.proxy as VmComponentPublicInstance).reload()
                    }, 0)
                  } else {
                    // If multiple component properties are changed at once, reload them in sequence.
                    // 如果一瞬间多个组件属性被改变，只在最后一个属性改变完后 reload 一次。
                    instance.reloadingPromise = new Promise((resolve, reject) => {
                      ;(instance.proxy as VmComponentPublicInstance)
                        .reload()
                        .then(() => {
                          resolve(true)
                        })
                        .catch(e => {
                          reject(e)
                        })
                    })
                  }
                }
              }
            },
            {
              deep: watcherOptions?.deep
            }
          )
          unwatchFns.push(unwatch)
        })
    } else {
      unwatchFns.forEach(item => item())
      unwatchFns.length = 0
    }
  }

  const transformProp = (prop, value, childProps?) => {
    return value
  }

  const createMaplibreObject = async () => {
    logger.debug('do createMaplibreObject')
    if (isFunction(instance.createMaplibreObject)) {
      return instance.createMaplibreObject()
    } else {
      // TODO: 可能用不上通用逻辑了
      // const options = transformProps(props)
      // return new Cesium[instance.cesiumClass](options)
      return Promise.resolve(true)
    }
  }

  let creatingPromiseResolve, creatingPromiseReject
  const creatingPromise = new Promise<VmReadyObject | boolean>((resolve, reject) => {
    creatingPromiseResolve = resolve
    creatingPromiseReject = reject
  })

  onMounted(async () => {
    logger.debug(`${instance.className}---onMounted`)

    if (instance.className === 'Map') {
      // console.log('等待旧地图卸载')
      await globalConfig.value?.__mapUnloadingPromise
      // console.log('新地图开始加载')
    }

    try {
      let isLoading = false
      if ($vm.map || isMapRoot) {
        isLoading = true
        load()
          .then(e => {
            creatingPromiseResolve(e)
            isLoading = false
          })
          .catch(e => {
            emit('unready', e)
            creatingPromiseReject(e)
          })
      }

      const loader = async () => {
        if ($vm.creatingPromise) {
          await $vm.creatingPromise
        }
        if (!isLoading && !instance.isUnmounted) {
          load()
            .then(e => {
              creatingPromiseResolve(e)
            })
            .catch(e => {
              emit('unready', e)
              creatingPromiseReject(e)
            })
        }
      }

      const parentReadyLoader = () => {
        loader()
      }

      const mapReadyLoader = () => {
        if (instance.mapReady) {
          return
        }

        instance.mapReady = true

        loader()
      }

      if (parentInstance?.vmMitt) {
        parentInstance.vmMitt.on('__vue_maplibre_parent_component_ready__', parentReadyLoader)
      } else {
        if (instance.mapRequired) {
          $vm.vmMitt.on('__vue_maplibre_vm_map_ready__', mapReadyLoader)
        } else {
          loader()
        }
      }
    } catch (e) {
      emit('unready', e)
      creatingPromiseReject(e)
    }
  })

  onUnmounted(() => {
    logger.debug(`${instance.className}---onUnmounted`)

    let unloadingResolve
    if (instance.className === 'Map') {
      // console.log('旧地图开始卸载')
      globalConfig.value.__mapUnloadingPromise = new Promise((resolve, reject) => {
        unloadingResolve = resolve
      })
    }

    instance.unloadingPromise = new Promise((resolve, reject) => {
      unload().then(() => {
        logger.debug(`${instance.className}---unloaded`)
        resolve(true)
        instance.isUnmounted = true
        instance.unloadingPromise = undefined
        instance.vmMitt.off('__vue_maplibre_parent_component_ready__')
        $vm.vmMitt.off('__vue_maplibre_vm_map_ready__')

        !isMapRoot && instance.vmMitt.all.clear()

        if (instance.className === 'Map') {
          unloadingResolve(true)
          globalConfig.value.__mapUnloadingPromise = undefined
          // console.log('旧地图卸载完成')
        }
      })
    })
    instance.alreadyListening = []
  })

  // expose public methods
  Object.assign(instance.proxy, {
    creatingPromise,
    load,
    unload,
    reload,
    getCreatingPromise: () => creatingPromise,
    getMaplibreObject: () => instance.maplibreObject
  })

  const $services = !isMapRoot && parentInstance?.children ? inject<VmMapProvider>(vmKey) : undefined

  const getServices: () => VmMapProvider = () => {
    if (!$vm.map) {
      const mapContainerId = props.mapContainerId || attrs.mapContainerId || attrs['map-container-id'] || 'mapContainer'
      if (instance.appContext.config.globalProperties.$VueMaplibre) {
        $vm.map = instance.appContext.config.globalProperties.$VueMaplibre[mapContainerId]?.map
      }
    }

    return mergeDescriptors(
      {},
      {
        ...($services?.map ? $services : $vm),
        creatingPromise
      }
    )
  }

  logger.debug(`${instance.className}---onCreated`)

  return {
    $services: getServices(),
    load,
    unload,
    reload,
    creatingPromise,
    transformProp,
    // transformProps,
    unwatchFns,
    setPropsWatcher,
    logger,
    getServices
  }
}
