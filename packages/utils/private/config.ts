/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2024-02-04 16:32:58
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\utils\private\config.ts
 */
import { Language } from '@vue-maplibre/locale'
import type { InjectionKey, Ref } from 'vue'

const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'
export interface ConfigProviderContext {
  locale?: Language
  reloadMode?: 'once' | 'all'
  __mapUnloadingPromise?: Promise<boolean>
  [propName: string]: any
}

export const vmKey = hasSymbol ? Symbol('__VueMaplibre__') : '__VueMaplibre__'

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol()
