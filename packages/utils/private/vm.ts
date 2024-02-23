/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-04 11:06:05
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-04 14:27:54
 * @FilePath: \vue-maplibre\packages\utils\private\vm.ts
 */
import { capitalize } from 'vue'
import { AnyFunction, VmComponentInternalInstance } from '../types'
import { camelCase, findIndex } from 'lodash-unified'

import { defineComponent, markRaw } from 'vue'

export const createComponent = raw => markRaw(defineComponent(raw))
export const createDirective = raw => markRaw(raw)

export function getInstanceListener(vcInstance: VmComponentInternalInstance, listenerName: string) {
  const props = vcInstance.vnode.props
  if (props === null) {
    return undefined
  }
  const propKeys = Object.keys(props)
  const index = findIndex(propKeys, o => {
    return o.includes(`on${capitalize(listenerName)}`) || o.includes(`on${capitalize(camelCase(listenerName))}`)
  })
  const listener = props[propKeys[index]]
  return listener as AnyFunction<any>
}
