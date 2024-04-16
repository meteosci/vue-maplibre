/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2024-04-16 16:55:54
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\utils\private\config.ts
 */
import type { InjectionKey, Ref } from 'vue'
import { ConfigProviderContext } from '../types'

const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'

export const vmKey = hasSymbol ? Symbol('__VueMaplibre__') : '__VueMaplibre__'

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol()
