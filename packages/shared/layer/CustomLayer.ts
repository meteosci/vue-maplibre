/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-18 00:29:16
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-01-02 15:59:10
 * @FilePath: \vue-maplibre\packages\shared\layer\CustomLayer.ts
 */

import type { CustomLayerOptions, GLTFLayerOptions } from '@vue-maplibre/utils/types'
import type { CustomLayerInterface, CustomRenderMethodInput, Map } from 'maplibre-gl'
import { Base } from '../core'

/**
 * CustomLayer 是一个继承自 Base 类的自定义图层基类。
 */
export default class CustomLayer extends Base implements CustomLayerInterface {
  id: string
  renderingMode: CustomLayerInterface['renderingMode']
  type: CustomLayerInterface['type']
  map: Map

  static CID = 0

  declare options: CustomLayerOptions

  /**
   * 创建一个 CustomLayer 实例。
   * @param options 选项对象。
   */
  constructor(options: CustomLayerOptions) {
    super(options)
    this.id = options?.id || `custom_${CustomLayer.CID++}`
    this.type = 'custom'
    this.renderingMode = '2d'
    this.map = null
  }

  get gl() {
    const map: any = this.map
    return map.painter.context.gl as WebGLRenderingContext
  }

  /**
   * 在地图上添加图层时触发的回调。
   * @param map Map 对象。
   * @param gl WebGL 渲染上下文。
   */
  onAdd(map: Map, gl: WebGLRenderingContext | WebGL2RenderingContext) {
    this.map = map
    this.listen(map, 'resize', this.onMapResize.bind(this))
  }

  /**
   * 预渲染阶段的回调。
   * @param gl WebGL 渲染上下文。
   * @param matrix 渲染矩阵。
   */
  prerender(gl: WebGLRenderingContext | WebGL2RenderingContext, options: CustomRenderMethodInput) {
    // 实现 prerender 方法
  }

  /**
   * 渲染阶段的回调。
   * @param gl WebGL 渲染上下文。
   * @param matrix 渲染矩阵。
   */
  render(gl: WebGLRenderingContext | WebGL2RenderingContext, options: CustomRenderMethodInput) {
    // 实现 render 方法
  }

  /**
   * 从地图上移除图层时触发的回调。
   * @param map Map 对象。
   * @param gl WebGL 渲染上下文。
   */
  onRemove(map: Map, gl: WebGLRenderingContext | WebGL2RenderingContext) {
    this.dispose()
  }

  /**
   * 更改选项的值。
   * @param options 新的选项对象。
   * @returns 当前 CustomLayer 实例。
   */
  changeOptions(options: CustomLayerOptions | GLTFLayerOptions) {
    super.changeOptions(options)
    this.onChangeOptions(options)
    this.map.triggerRepaint()
    return this
  }

  /**
   * 在选项更改时触发的回调。
   * @param options 新的选项对象。
   */
  onChangeOptions(options: CustomLayerOptions) {
    // 实现 onChangeOptions 方法
  }

  /**
   * 地图大小调整时触发的回调。
   * @param layer 自定义图层对象（可选）。
   */
  onMapResize(layer?: CustomLayer) {
    // 实现 onMapResize 方法
  }
}
