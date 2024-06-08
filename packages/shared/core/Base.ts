/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:57:16
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-17 17:06:48
 * @FilePath: \vue-maplibre\packages\shared\Base.ts
 */
import { Evented } from 'maplibre-gl'
import { merge } from 'lodash-es'
import { AnyFunction, Listener } from '@vue-maplibre/utils/types'

/**
 * Base 类是一个继承自 Evented 类的基类，用于处理事件监听和选项管理。
 */
export default class Base extends Evented {
  listeners: Listener[]
  options: any

  static defaultOptions = {}

  /**
   * 创建一个 Base 实例。
   * @param options 选项对象。
   */
  constructor(options: any) {
    super()
    this.listeners = []
    this.options = merge({}, (this.constructor as any).defaultOptions, options)
  }

  /**
   * 更改选项的值。
   * @param options 新的选项对象。
   * @returns 当前 Base 实例。
   */
  changeOptions(options: any): this {
    Object.assign(this.options, options)
    return this
  }

  /**
   * 添加事件监听器，同时保存监听器的引用以便后续取消监听。
   * @param target 事件的目标对象。
   * @param eventName 要监听的事件名称。
   * @param handler 事件处理函数。
   */
  listen(target: Evented, eventName: string, handler: AnyFunction): void {
    this.listeners.push({
      target,
      eventName,
      handler
    })
    target.on(eventName, handler)
  }

  /**
   * 取消所有已添加的事件监听器。
   */
  dispose(): void {
    this.listeners.forEach(({ target, eventName, handler }) => {
      target.off(eventName, handler)
    })
    this.listeners = []
  }
}
