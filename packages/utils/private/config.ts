/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2024-12-26 18:07:32
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\utils\private\config.ts
 */
// import type { InjectionKey, Ref } from 'vue'
// import { ConfigProviderContext } from '../types'

// const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'
// export const vmKey = hasSymbol ? Symbol('__VueMaplibre__') : '__VueMaplibre__'
// export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol()

// 暂时不用 symbol 避免依赖于 vue-maplibre 的协同库 因为版本号不一样导致通过 inject 方法获取注入对象失败。
export const vmKey = `__@meteosci/vue-maplibre__`
export const configProviderContextKey = `__@meteosci/vue-maplibre_configProvider__`
