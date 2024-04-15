import {
  AroundCenterOptions,
  CameraUpdateTransformFunction,
  ControlPosition,
  DragPanOptions,
  FitBoundsOptions,
  GestureOptions,
  LngLatBoundsLike,
  LngLatLike,
  RequestTransformFunction,
  StyleSpecification
} from 'maplibre-gl'
import { PropType } from 'vue'

export default {
  hash: {
    type: [String, Boolean],
    default: false
  },
  interactive: {
    type: Boolean,
    default: true
  },
  bearingSnap: {
    type: Number,
    default: 7
  },
  attributionControl: {
    type: Boolean,
    default: true
  },
  customAttribution: {
    type: [String, Array] as PropType<string | string[]>,
    default: 'MapLibre'
  },
  maplibreLogo: {
    type: Boolean,
    default: false
  },
  logoPosition: {
    type: String as PropType<ControlPosition>,
    default: 'bottom-left'
  },
  failIfMajorPerformanceCaveat: {
    type: Boolean,
    default: false
  },
  preserveDrawingBuffer: {
    type: Boolean,
    default: false
  },
  antialias: {
    type: Boolean,
    default: false
  },
  refreshExpiredTiles: {
    type: Boolean,
    default: true
  },
  maxBounds: {
    type: [Object, Array] as PropType<LngLatBoundsLike>
  },
  scrollZoom: {
    type: [Boolean, Object] as PropType<boolean | AroundCenterOptions>,
    default: true
  },
  minZoom: {
    type: Number,
    default: 0
  },
  maxZoom: {
    type: Number,
    default: 22
  },
  minPitch: {
    type: Number,
    default: 0
  },
  maxPitch: {
    type: Number,
    default: 60
  },
  boxZoom: {
    type: Boolean,
    default: true
  },
  dragRotate: {
    type: Boolean,
    default: true
  },
  dragPan: {
    type: [Boolean, Object] as PropType<boolean | DragPanOptions>,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  doubleClickZoom: {
    type: Boolean,
    default: true
  },
  touchZoomRotate: {
    type: [Boolean, Object] as PropType<boolean | AroundCenterOptions>,
    default: true
  },
  touchPitch: {
    type: [Boolean, Object] as PropType<boolean | AroundCenterOptions>,
    default: true
  },
  cooperativeGestures: {
    type: [Boolean, Object] as PropType<boolean | GestureOptions>,
  },
  trackResize: {
    type: Boolean,
    default: true
  },
  center: {
    type: [Object, Array] as PropType<LngLatLike>,
    default: [0, 0]
  },
  zoom: {
    type: Number,
    default: 0
  },
  bearing: {
    type: Number,
    default: 0
  },
  pitch: {
    type: Number,
    default: 0
  },
  renderWorldCopies: {
    type: Boolean,
    default: true
  },
  maxTileCacheSize: {
    type: Number
  },
  maxTileCacheZoomLevels: {
    type: Number,
    default: 5
  },
  transformRequest: {
    type: Function as PropType<RequestTransformFunction>
  },
  transformCameraUpdate: {
    type: Function as PropType<CameraUpdateTransformFunction>
  },
  locale: {
    type: Object as PropType<any>
  },
  fadeDuration: {
    type: Number,
    default: 300
  },
  crossSourceCollisions: {
    type: Boolean,
    default: true
  },
  collectResourceTiming: {
    type: Boolean,
    default: false
  },
  clickTolerance: {
    type: Number
  },
  bounds: {
    type: [Object, Array] as PropType<LngLatBoundsLike>
  },
  fitBoundsOptions: {
    type: Object as PropType<FitBoundsOptions>
  },
  localIdeographFontFamily: {
    type: String,
    default: 'sans-serif'
  },
  mapStyle: {
    type: [String, Object] as PropType<string | StyleSpecification>,
    default: 'https://demotiles.maplibre.org/style.json'
  },
  pitchWithRotate: {
    type: Boolean,
    default: true
  },
  pixelRatio: {
    type: Number,
    default: devicePixelRatio
  },
  validateStyle: {
    type: Boolean,
    default: true
  },
  maxCanvasSize: {
    type: Array as unknown as PropType<[number, number]>,
    default: [4096, 4096]
  },
  containerId: String,
  touchHoldArg: {
    type: String,
    default: '1000'
  }
}
