/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-11-25 01:19:18
 * @LastEditTime: 2024-01-09 15:32:03
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \demo\src\directives\permission.ts
 */

import { pinia, store } from '@src/store'
import { createDirective } from '@src/utils'

export default createDirective({
  name: 'permission',

  beforeMount(el, binding) {
    //
  },
  mounted(el, binding) {
    const { value } = binding

    const hasPermission = store.system.usePermissionStore(pinia).hasPermission(value)

    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  },
  updated(el, binding) {
    //
  },

  beforeUnmount(el) {
    //
  }
})
