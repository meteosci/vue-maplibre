/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-20 10:46:14
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-14 15:17:25
 * @FilePath: \vue-maplibre\packages\utils\private\emits.ts
 */
import { VmComponentInternalInstance, VmReadyObject } from '../types'

export const commonEmits = {
  /**
   * Triggers before the maplibreObject is loaded.
   * @param instance
   * @returns
   */
  beforeLoad: (instance: VmComponentInternalInstance) => true,
  /**
   * Triggers when the maplibreObject is successfully loaded.
   * @param readyObj
   * @returns
   */
  ready: (readyObj: VmReadyObject) => true,
  /**
   * Triggers when the maplibreObject loading failed.
   * @param e
   * @returns
   */
  unready: (e: any) => true,
  /**
   * Triggers when the maplibreObject is destroyed.
   * @param instance
   * @returns
   */
  destroyed: (instance: VmComponentInternalInstance) => true
}
