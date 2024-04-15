/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 16:56:23
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-15 14:49:15
 * @FilePath: \vue-maplibre\demo\src\composables\use-base-layer\index.ts
 */

export default function () {
  // const $mapService = useMap()
  // const tk = '436ce7e50d27eede2f2929307e6b33c0'
  // const baseLayers = [
  //   {
  //     label: '矢量底图',
  //     id: 'vec_w',
  //     tiles: Array.from({ length: 8 }, (_, index) => `https://t${index}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${tk}`)
  //   },
  //   {
  //     label: '影像底图',
  //     id: 'img_w',
  //     tiles: Array.from({ length: 8 }, (_, index) => `https://t${index}.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${tk}`)
  //   },
  //   {
  //     label: '地形渲染',
  //     id: 'ter_w',
  //     tiles: Array.from({ length: 8 }, (_, index) => `https://t${index}.tianditu.gov.cn/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=${tk}`)
  //   }
  // ]

  // const overlayLayers = [
  //   {
  //     label: '注记图层',
  //     id: 'cva_w',
  //     type: 'raster',
  //     tiles: Array.from({ length: 8 }, (_, index) => `https://t${index}.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${tk}`),
  //     initShow: true
  //   }
  // ] as any[]

  // const initLayers = (index = 0) => {
  //   const map = $mapService.map
  //   // 默认显示底图图层数组中的第一个图层
  //   const { id, tiles } = baseLayers[index]
  //   map.addLayer({
  //     id,
  //     type: 'raster',
  //     source: {
  //       type: 'raster',
  //       tiles,
  //       tileSize: 256,
  //       maxzoom: 14
  //     }
  //   })

  //   // 添加 overlay 图层
  //   overlayLayers.forEach(overlayLayer => {
  //     const { id, type, tiles } = overlayLayer

  //     if (tiles) {
  //       map.addLayer({
  //         id,
  //         type,
  //         source: {
  //           type,
  //           tiles,
  //           tileSize: 256,
  //           maxzoom: 19
  //         }
  //       })
  //     } else {
  //       map.addLayer({
  //         id,
  //         type
  //         // source,
  //         // paint,
  //         // layout
  //       })
  //     }

  //     if (!overlayLayer.initShow) {
  //       map.setLayoutProperty(id, 'visibility', 'none')
  //     }
  //   })
  // }

  // return {
  //   baseLayers,
  //   overlayLayers,
  //   initLayers
  // }
}
