<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-09 10:18:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-12-26 22:36:31
 * @FilePath: \vue-maplibre\demo\src\pages\map\Index.vue
-->
<template>
  <div class="page-demo-map" style="width: 100%; height: 100%; display: flex">
    <VmMap
      map-style="https://demotiles.maplibre.org/style.json"
      :center="center"
      :zoom="zoom"
      container-id="mapContainer"
      @click="onClick"
      @ready="onMapReady"
      @load="onLoad"
    >
      <VmControlNavigation></VmControlNavigation>
      <VmControlTerrain source="terrainSource" position="top-right"></VmControlTerrain>
      <template v-if="mapsReady['mapContainer']">
        <WidgetDemo></WidgetDemo>
        <VmLayerNative id="conferences" type="symbol" :source="source" :layout="layout"></VmLayerNative>
        <VmLayerGltf :position="position" url="https://dps.cloudtao.com.cn/public/map/model/gltf/34M_17/34M_17.gltf"></VmLayerGltf>
      </template>
    </VmMap>
    <VmMap
      map-style="https://demotiles.maplibre.org/style.json"
      :center="center"
      :zoom="zoom"
      container-id="mapContainer1"
      @click="onClick"
      @ready="onMapReady"
      @load="onLoad"
    >
      <VmControlTerrain source="terrainSource" position="top-right"></VmControlTerrain>
      <template v-if="mapsReady['mapContainer1']">
        <VmLayerNative id="conferences" type="symbol" :source="source" :layout="layout"></VmLayerNative>
        <VmLayerGltf :position="position" url="https://dps.cloudtao.com.cn/public/map/model/gltf/34M_17/34M_17.gltf"></VmLayerGltf>
      </template>
    </VmMap>

    <VmControlNavigation map-container-id="mapContainer1"></VmControlNavigation>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VmMap, VmLayerGltf, VmLayerGltfProps, VmLayerNative, VmControlNavigation, VmControlTerrain } from '@vue-maplibre/components'
import { GeoJSONSourceSpecification, LngLatLike, SymbolLayerSpecification } from 'maplibre-gl'
import WidgetDemo from './WidgetDemo.vue'
import { useVueMaplibre } from '@meteosci/vue-maplibre'

const center = ref<LngLatLike>([108, 32])
const position = ref<VmLayerGltfProps['position']>([108, 32, 0])
const zoom = ref(18)
const mapRef = ref(null)
const mapReady = ref(false)
const mapsReady = ref({})
const $mapService = useVueMaplibre()
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

const onClick = e => {
  console.log(e)
}

const onLoad = e => {
  console.log('onLoad', e)
}

const onMapReady = e => {
  console.log('onMapReady', e)
  const { map } = e
  map.on('load', async () => {
    const image = await map.loadImage('https://vue-maplibre.meteosci.com/images/osgeo-logo.png')
    map.addImage('custom-marker', image.data)
    // mapReady.value = true
    mapsReady.value[e.vm.props.containerId as string] = true
    // 强制刷新一次
    map.resize()
    mapReady.value = true
  })
}
// window.zoom = zoom
</script>

<style lang="scss">
.page-demo-map {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
