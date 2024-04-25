/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-21 18:02:13
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-26 00:31:19
 * @FilePath: \vue-maplibre\packages\components\layer\native\props.ts
 */
import type {
  FilterSpecification,
  RasterLayerSpecification,
  FillLayerSpecification,
  LineLayerSpecification,
  SymbolLayerSpecification,
  CircleLayerSpecification,
  HeatmapLayerSpecification,
  FillExtrusionLayerSpecification,
  HillshadeLayerSpecification,
  BackgroundLayerSpecification,
  SourceSpecification
} from 'maplibre-gl'
import type { PropType } from 'vue'

export default {
  id: {
    type: String,
    required: true
  },
  beforeId: String,
  type: {
    type: String as PropType<'fill' | 'line' | 'symbol' | 'symbol' | 'circle' | 'heatmap' | 'fill-extrusion' | 'raster' | 'hillshade' | 'background'>
  },
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
    type: [Boolean, Object] as PropType<boolean | FilterSpecification>,
    default: undefined
  },
  layout: {
    type: Object as PropType<
      | FillLayerSpecification['layout']
      | LineLayerSpecification['layout']
      | SymbolLayerSpecification['layout']
      | CircleLayerSpecification['layout']
      | HeatmapLayerSpecification['layout']
      | FillExtrusionLayerSpecification['layout']
      | RasterLayerSpecification['layout']
      | HillshadeLayerSpecification['layout']
      | BackgroundLayerSpecification['layout']
    >
  },
  paint: {
    type: Object as PropType<
    | FillLayerSpecification['paint']
    | LineLayerSpecification['paint']
    | SymbolLayerSpecification['paint']
    | CircleLayerSpecification['paint']
    | HeatmapLayerSpecification['paint']
    | FillExtrusionLayerSpecification['paint']
    | RasterLayerSpecification['paint']
    | HillshadeLayerSpecification['paint']
    | BackgroundLayerSpecification['paint']
  >
  }
}
