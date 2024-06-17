/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-08-03 13:30:02
 * @LastEditTime: 2024-06-17 16:34:55
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\utils\objects.ts
 */
import { get, set } from 'lodash-unified'
import type { Entries } from 'type-fest'
import { Arrayable } from './types'

export const keysOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>
export const entriesOf = <T>(arr: T) => Object.entries(arr) as Entries<T>

export const getProp = <T = any>(obj: Record<string, any>, path: Arrayable<string>, defaultValue?: any): { value: T } => {
  return {
    get value() {
      return get(obj, path, defaultValue)
    },
    set value(val: any) {
      set(obj, path, val)
    }
  }
}
