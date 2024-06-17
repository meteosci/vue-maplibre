/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-21 18:02:13
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-17 14:53:25
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
  /**
   * Unique layer name.
   */
  id: {
    type: String,
    required: true
  },
  /**
   * The ID of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer.
   * If this argument is not specified, the layer will be appended to the end of the layers array
   * and appear visually above all other layers.
   */
  beforeId: String,
  /**
   * Rendering type of this layer. Required enum. Possible values: fill, line, symbol, circle, heatmap, fill-extrusion, raster, hillshade, background.
   *
   * fill: A filled polygon with an optional stroked border.
   * line: A stroked line.
   * symbol: An icon or a text label.
   * circle: A filled circle.
   * heatmap: A heatmap.
   * fill-extrusion: An extruded (3D) polygon.
   * raster: Raster map textures such as satellite imagery.
   * hillshade: Client-side hillshading visualization based on DEM data. The implementation supports Mapbox Terrain RGB, Mapzen Terrarium tiles and custom encodings.
   * background: The background color or pattern of the map.
   */
  type: {
    type: String as PropType<
      'fill' | 'line' | 'symbol' | 'symbol' | 'circle' | 'heatmap' | 'fill-extrusion' | 'raster' | 'hillshade' | 'background' | 'raster-dem'
    >,
    required: true
  },
  /**
   * Arbitrary properties useful to track with the layer, but do not influence rendering. Properties should be prefixed to avoid collisions, like 'maplibre:'.
   * {"source:comment": "Hydrology FCCODE 460 - Narrow wash"}
   */
  metadata: {
    type: Object as PropType<unknown>
  },
  /**
   * Name of a source description to be used for this layer. Required for all layer types except.
   */
  source: {
    type: [String, Object] as PropType<string | SourceSpecification>,
    required: true
  },
  /**
   * multiplicator for the elevation. Used to make terrain more "extreme". works when type is 'raster-dem'.
   */
  exaggeration: {
    type: Number,
    default: 1
  },
  /**
   * Layer to use from a vector tile source. Required for vector tile sources; prohibited for all other source types, including GeoJSON sources.
   */
  sourceLayer: {
    type: String
  },
  /**
   * The minimum zoom level for the layer. At zoom levels less than the minzoom, the layer will be hidden. number in range [0, 24].
   */
  minzoom: {
    type: Number
  },
  /**
   * The maximum zoom level for the layer. At zoom levels equal to or greater than the maxzoom, the layer will be hidden. number in range [0, 24].
   */
  maxzoom: {
    type: Number
  },
  /**
   * A expression specifying conditions on source features. Only features that match the filter are displayed. Zoom expressions in filters are only evaluated at integer zoom levels. The feature-state expression is not supported in filter expressions.
   */
  filter: {
    type: [Boolean, Object] as PropType<boolean | FilterSpecification>,
    default: undefined
  },
  /**
   * Layout properties for the layer.
   */
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
  /**
   * Default paint properties for this layer.
   */
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
