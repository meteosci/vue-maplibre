<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-15 18:37:26
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 16:18:53
 * @FilePath: \vue-maplibre\docs\examples\layer-native\vector.vue
-->
<template>
  <div class="map-demo-container">
    <VmMap :map-style="mapStyle" :center="center" :zoom="zoom" @ready="onMapReady">
      <VmLayerNative v-if="isMapReady" id="conferences" type="symbol" :source="source" :layout="layout"></VmLayerNative>
      <VmLayerNative
        v-if="isMapReady"
        id="vector-tiles"
        type="line"
        :source="sourceVector"
        :minzoom="0"
        :maxzoom="8"
        source-layer="border"
        :paint="paintVector"
      ></VmLayerNative>
    </VmMap>
  </div>
</template>

<script lang="ts" setup>
import { VmReadyObject } from '@meteosci/vue-maplibre/es/utils'
import {
  LngLatLike,
  GeoJSONSourceSpecification,
  SymbolLayerSpecification,
  StyleSpecification,
  SourceSpecification,
  VectorSourceSpecification,
  LineLayerSpecification
} from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([11.39085, 47.27574])
const zoom = ref(1)
const isMapReady = ref(false)

const glyphsURL = `https://vue-maplibre.meteosci.com/font/glyphs`
const spriteURL = `https://vue-maplibre.meteosci.com/font/sprite/sprite`

const mapStyle = {
  version: 8,
  glyphs: glyphsURL + '/{fontstack}/{range}.pbf',
  sprite: spriteURL,
  sources: {},
  layers: []
} as StyleSpecification

const layout: SymbolLayerSpecification['layout'] = {
  'icon-image': 'custom-marker',
  // get the year from the source's "year" property
  'text-field': ['get', 'year'],
  'text-font': ['Noto Sans Regular'],
  'text-offset': [0, 1.25],
  'text-anchor': 'top'
}

const source: GeoJSONSourceSpecification = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [100.4933, 13.7551]
        },
        properties: { year: '2004' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [6.6523, 46.5535]
        },
        properties: { year: '2006' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-123.3596, 48.4268]
        },
        properties: { year: '2007' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [18.4264, -33.9224]
        },
        properties: { year: '2008' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [151.195, -33.8552]
        },
        properties: { year: '2009' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.1404, 41.3925]
        },
        properties: { year: '2010' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-104.8548, 39.7644]
        },
        properties: { year: '2011' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.1665, 52.9539]
        },
        properties: { year: '2013' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.6544, 45.5428]
        },
        properties: { year: '2014' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [126.974, 37.5651]
        },
        properties: { year: '2015' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [7.1112, 50.7255]
        },
        properties: { year: '2016' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.0314, 42.3539]
        },
        properties: { year: '2017' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [39.2794, -6.8173]
        },
        properties: { year: '2018' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [26.0961, 44.4379]
        },
        properties: { year: '2019' }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-114.0879, 51.0279]
        },
        properties: { year: '2020' }
      }
    ]
  }
}

const sourceVector: VectorSourceSpecification = {
  type: 'vector',
  tiles: ['https://vue-maplibre.meteosci.com/mvt/china/{z}/{x}/{y}.mvt'],
  minzoom: 0,
  maxzoom: 8
}

const paintVector: LineLayerSpecification['paint'] = {
  'line-color': 'rgba(219, 18, 18, 1)',
  'line-width': 3
}

const onMapReady = (e: VmReadyObject) => {
  const { map } = e

  map.on('load', async () => {
    map.resize()

    // Add an image to use as a custom marker
    const image = await map.loadImage('https://vue-maplibre.meteosci.com/images/osgeo-logo.png')
    map.addImage('custom-marker', image.data)

    isMapReady.value = true
  })
}
</script>
