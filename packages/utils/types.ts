/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-02 16:11:56
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-20 15:19:12
 * @FilePath: \vue-maplibre\packages\utils\types.ts
 */

import type { Ref, Plugin, CSSProperties, ComponentInternalInstance, ComponentPublicInstance } from 'vue'
import type { Map, NavigationControl } from 'maplibre-gl'
import type { Emitter } from 'mitt'

export interface AnyObject {
  [propName: string]: any
}

export type LooseDictionary = { [index in string]: any }

export type AnyFunction<T = void> = (...args: any[]) => T

export type SFCWithInstall<T> = T & Plugin

export type Arrayable<T> = T | T[]
export type Awaitable<T> = Promise<T> | T
export type MaybeRef<T> = T | Ref<T>

export type VueClassObjectProp = {
  [value: string]: any
}
export type VueClassProp = string | Array<VueClassProp> | VueClassObjectProp

export type VueStyleObjectProp = Partial<CSSStyleDeclaration>

export type VmMittEvents = {
  ready: VmReadyObject
  [key: string]: any
}

export interface VmComponentInternalInstance extends ComponentInternalInstance {
  mounted: boolean
  loading: boolean
  unloadingPromise?: Promise<boolean>
  reloadingPromise?: Promise<boolean>
  map: Map
  maplibreEvents?: Array<string>
  renderByParent?: boolean
  vmMitt: Emitter<VmMittEvents>
  maplibreObject?(): Promise<unknown>
  createMaplibreObject?(): Promise<unknown>
  mount?(): Promise<boolean | undefined>
  unmount?(): Promise<boolean | undefined>
  children?: Array<VmComponentInternalInstance>
  removeCallbacks: Array<AnyFunction<any>>
}

export type VmComponentPublicInstance<T = any> = ComponentPublicInstance<
  T & {
    /**
     * Load components manually.
     */
    load(): Promise<VmReadyObject | boolean>
    /**
     * Destroy the loaded component manually.
     */
    unload(): Promise<boolean>
    /**
     * Reload components manually.
     */
    reload(): Promise<boolean>
    /**
     * Determine whether the component is created by this.
     */
    creatingPromise: Promise<VmReadyObject>
    /**
     * The maplibreObject created by component.
     */
    maplibreObject: any
    /**
     * Get the maplibreObject created by component.
     */
    getMaplibreObject(): any
  }
>

export interface VmMapProvider {
  map: Map
  creatingPromise?: Promise<Map>
}

export interface VmReadyObject {
  map: Map
  maplibreObject?: any
}
