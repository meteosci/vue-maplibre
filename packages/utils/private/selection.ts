/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-04 14:37:40
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-04 14:38:57
 * @FilePath: \vue-maplibre\packages\utils\private\selection.ts
 */

import { platform } from '../platform'

export function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection()
    if (selection?.empty !== void 0) {
      selection.empty()
    } else if (selection?.removeAllRanges !== void 0) {
      selection.removeAllRanges()
      platform().isPhone !== true && selection.addRange(document.createRange())
    }
  } else if ((document as any).selection !== void 0) {
    ;(document as any).selection.empty()
  }
}
