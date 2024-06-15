/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-18 11:39:06
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-14 23:50:50
 * @FilePath: \vue-maplibre\packages\components\control\navigation\props.ts
 */
import { ControlPosition } from 'maplibre-gl'
import { PropType } from 'vue'

export default {
  /**
   * If `true` the compass button is included.
   */
  showCompass: {
    type: Boolean,
    default: true
  },
  /**
   * If `true` the zoom-in and zoom-out buttons are included.
   */
  showZoom: {
    type: Boolean,
    default: true
  },
  /**
   * If `true` the pitch is visualized by rotating X-axis of compass.
   */
  visualizePitch: {
    type: Boolean,
    default: false
  },
  position: {
    type: String as PropType<ControlPosition>,
    default: 'top-right'
  }
}
