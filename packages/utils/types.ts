/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-02 16:11:56
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-12-26 14:06:09
 * @FilePath: \vue-maplibre\packages\utils\types.ts
 */

import type { Ref, Plugin, ComponentInternalInstance, ComponentPublicInstance } from 'vue'
import type { Evented, Map } from 'maplibre-gl'
import type { Emitter } from 'mitt'
import type { Language } from '@vue-maplibre/locale'

export interface AnyObject {
  [propName: string]: any
}

export type LooseDictionary = { [index in string]: any }

export type AnyFunction<T = any> = (...args: any[]) => T

export type Listener = {
  target: Evented
  eventName: string
  handler: AnyFunction
}

export type SFCWithInstall<T> = T & Plugin

export type Arrayable<T> = T | T[]
export type Awaitable<T> = Promise<T> | T
export type MaybeRef<T> = T | Ref<T>

export type VueClassObjectProp = {
  [value: string]: any
}
export type VueClassProp = string | Array<VueClassProp> | VueClassObjectProp

export type VueStyleObjectProp = Partial<CSSStyleDeclaration>

export type VmMittEvents<T = any> = T & {
  ready: VmReadyObject
  destroyed: VmComponentInternalInstance
}

export interface VmComponentInternalInstance extends ComponentInternalInstance {
  mounted: boolean
  loading: boolean
  unloadingPromise?: Promise<boolean>
  reloadingPromise?: Promise<boolean>
  map: Map
  maplibreEvents?: Array<string>
  renderByParent?: boolean
  nowaiting?: boolean
  className?: string
  maplibreObject?: unknown
  vmMitt?: Emitter<VmMittEvents>
  createMaplibreObject?(): Promise<unknown>
  mount?(): Promise<boolean | undefined>
  unmount?(): Promise<boolean | undefined>
  children?: Array<VmComponentInternalInstance>
  alreadyListening: string[]
  removeCallbacks: Array<AnyFunction<any>>
  mapRequired?: boolean
  mapReady?: boolean
}

export type VmComponentPublicInstance<T = any> = ComponentPublicInstance<
  T & {
    /**
     * Load the component manually.
     */
    load(): Promise<VmReadyObject | boolean>
    /**
     * Destroy the loaded component manually.
     */
    unload(): Promise<boolean>
    /**
     * Reload the component manually.
     */
    reload(): Promise<boolean>
    /**
     * Determine whether the component is created by this.
     */
    creatingPromise: Promise<VmReadyObject>
    /**
     * The maplibreObject created by component.
     */
    maplibreObject: unknown
    /**
     * Get the maplibreObject created by component.
     */
    getMaplibreObject(): unknown
  }
>

export interface ConfigProviderContext {
  locale?: Language
  reloadMode?: 'once' | 'all'
  __mapUnloadingPromise?: Promise<boolean>
  vmMitt?: Emitter<VmMittEvents>
  [propName: string]: any
}

export interface VmMapProvider extends ConfigProviderContext {
  map: Map
  creatingPromise?: Promise<VmReadyObject>
}

export interface VmReadyObject {
  map: Map
  maplibreObject?: unknown
  vm?: VmComponentInternalInstance
}

/**
 * CustomLayer 自定义图层构造函数参数
 */
export interface CustomLayerOptions {
  /**
   * 图层的id
   */
  id?: string
  /**
   * 指定图层的元数据信息。
   */
  metadata?: unknown
}

export interface GLTFLayerOptions extends CustomLayerOptions {
  url?: string
  position?: [number, number, number] | [number, number]
  rotate?: [number, number, number]
  scale?: number
  clampToGround?: boolean
}
