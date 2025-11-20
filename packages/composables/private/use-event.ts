/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-20 15:41:26
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-16 10:46:45
 * @FilePath: \vue-maplibre\packages\composables\use-events\index.ts
 */
import type { VmComponentInternalInstance } from '@vue-maplibre/utils/types'
import { getInstanceListener } from '@vue-maplibre/utils/private/vm'

export default function (instance: VmComponentInternalInstance, props) {
  const bindEvents = (maplibreObject, events: Array<string>, register: boolean = true, eventLayerId?): void => {
    const ev = events || instance.maplibreEvents || []

    ev
    && ev.forEach((eventName) => {
      const listener = getInstanceListener(instance, eventName)

      if (listener) {
        const methodName = register ? 'on' : 'off'
        if (eventLayerId) {
          maplibreObject[methodName](eventName, eventLayerId, listener)
        }
        else {
          maplibreObject[methodName](eventName, listener)
        }
      }
    })
  }

  const registerEvents = (register: boolean, eventLayerId?) => {
    const { map, maplibreObject } = instance

    if (maplibreObject === undefined || map === undefined) {
      return
    }

    bindEvents(maplibreObject, instance.maplibreEvents || [], register, eventLayerId)
  }

  return {
    bindEvents,
    registerEvents
  }
}
