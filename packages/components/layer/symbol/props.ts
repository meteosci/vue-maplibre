/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-21 18:02:13
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-21 18:53:02
 * @FilePath: \vue-maplibre\packages\components\layer\symbol\props.ts
 */
import type { FilterSpecification, SourceSpecification, SymbolLayerSpecification } from 'maplibre-gl'
import type { PropType } from 'vue'

export default {
  id: {
    type: String,
    required: true
  },
  beforeId: String,
  metadata: {
    type: Object as PropType<unknown>
  },
  source: {
    type: [String, Object] as PropType<string | SourceSpecification>,
    required: true
  },
  sourceLayer: {
    type: String
  },
  minzoom: {
    type: Number
  },
  maxzoom: {
    type: Number
  },
  filter: {
    type: [Boolean, Object] as PropType<boolean | FilterSpecification>
  },
  layout: {
    type: Object as PropType<SymbolLayerSpecification['layout']>
  },
  paint: {
    type: Object as PropType<SymbolLayerSpecification['paint']>
  }
}
