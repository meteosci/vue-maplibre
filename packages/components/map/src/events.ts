/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-04 18:02:41
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-29 18:10:48
 * @FilePath: \vue-maplibre\packages\components\map\src\events.ts
 */
import { MapEventType, MapLayerEventType } from 'maplibre-gl'

const listener = (ev: (MapEventType[keyof MapEventType] | MapLayerEventType[keyof MapLayerEventType]) & object) => true

const emits: Record<
  keyof MapEventType | keyof MapLayerEventType | string,
  (ev: (MapEventType[keyof MapEventType] | MapLayerEventType[keyof MapLayerEventType]) & object) => void
> = {
  boxzoomcancel: listener,
  boxzoomstart: listener,
  boxzoomend: listener,
  click: listener,
  contextmenu: listener,
  data: listener,
  dataabort: listener,
  dataloading: listener,
  dblclick: listener,
  dragstart: listener,
  drag: listener,
  dragend: listener,
  error: listener,
  idle: listener,
  load: listener,
  mousedown: listener,
  mouseenter: listener,
  mouseleave: listener,
  mousemove: listener,
  mouseout: listener,
  mouseover: listener,
  mouseup: listener,
  move: listener,
  moveend: listener,
  movestart: listener,
  pitch: listener,
  pitchend: listener,
  pitchstart: listener,
  remove: listener,
  render: listener,
  resize: listener,
  rotate: listener,
  rotatestart: listener,
  rotateend: listener,
  sourcedata: listener,
  sourcedataabort: listener,
  sourcedataloading: listener,
  styledata: listener,
  styledataloading: listener,
  styleimagemissing: listener,
  terrain: listener,
  tiledataloading: listener,
  touchcancel: listener,
  touchend: listener,
  touchmove: listener,
  touchstart: listener,
  webglcontextlost: listener,
  webglcontextrestored: listener,
  wheel: listener,
  zoom: listener,
  zoomend: listener,
  zoomstart: listener
}
export default emits
