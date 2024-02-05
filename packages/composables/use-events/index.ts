/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-20 15:41:26
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-05 15:03:00
 * @FilePath: \vue-maplibre\packages\composables\use-events\index.ts
 */
import { VmComponentInternalInstance } from '@vue-maplibre/utils/types'
import { getInstanceListener } from '@vue-maplibre/utils/private/vm'

export default function (instance: VmComponentInternalInstance, props) {
  const bindEvents = (maplibreObject, events: Array<string>, register: boolean = true) => {
    const ev = events || instance.maplibreEvents || []

    ev &&
      ev.forEach(eventName => {
        const listener = getInstanceListener(instance, eventName)
        const methodName = register ? 'on' : 'off'
        listener && maplibreObject[methodName](listener)
      })
  }

  const registerEvents = (register: boolean) => {
    const { map, maplibreObject } = instance

    if (maplibreObject === undefined || map === undefined) {
      return
    }

    bindEvents(maplibreObject, instance.maplibreEvents || [], register)
  }

  return {
    bindEvents,
    registerEvents
  }
}
