/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-12-03 13:04:11
 * @LastEditTime: 2022-12-03 13:06:40
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \lc_-sys_-platform\src\utils\permission.ts
 */
import { pinia, store } from '@src/store'

export function hasPermission(permission: string) {
  return store.system.usePermissionStore(pinia).hasPermission(permission)
}
