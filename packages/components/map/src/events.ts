

/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-04 18:02:41
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-05 09:48:54
 * @FilePath: \vue-maplibre\packages\components\map\src\events.ts
 */
import { MapLayerEventType } from 'maplibre-gl'

export default [
  'boxzoomcancel',
  'boxzoomstart',
  'boxzoomend',
  'click',
  'contextmenu',
  'data',
  'dataabort',
  'dataloading',
  'dblclick',
  'dragstart',
  'drag',
  'dragend',
  'error',
  'idle',
  'load',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'move',
  'moveend',
  'movestart',
  'pitch',
  'pitchend',
  'pitchstart',
  'remove',
  'render',
  'resize',
  'rotate',
  'rotatestart',
  'rotateend',
  'sourcedata',
  'sourcedataabort',
  'sourcedataloading',
  'styledata',
  'styledataloading',
  'styleimagemissing',
  'terrain',
  'tiledataloading',
  'touchcancel',
  'touchend',
  'touchmove',
  'touchstart',
  'webglcontextlost',
  'webglcontextrestored',
  'wheel',
  'zoom',
  'zoomend',
  'zoomstart'
] as const
