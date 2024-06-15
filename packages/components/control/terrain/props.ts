/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-18 11:39:06
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-15 00:08:22
 * @FilePath: \vue-maplibre\packages\components\control\terrain\props.ts
 */

import { ControlPosition } from 'maplibre-gl'
import { PropType } from 'vue'

export default {
  source: {
    type: String
  },
  exaggeration: {
    type: Number,
    default: 1
  },
  position: {
    type: String as PropType<ControlPosition>,
    default: 'top-right'
  }
}
