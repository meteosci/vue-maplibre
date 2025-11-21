<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-17 14:26:43
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 14:03:46
 * @FilePath: \vue-maplibre\docs\examples\layer-native\3d-terrain.vue
-->
<script lang="ts" setup>
import type { VmReadyObject } from '@meteosci/vue-maplibre/es/utils'
import type { HillshadeLayerSpecification, LngLatLike, RasterDEMSourceSpecification } from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([11.39085, 47.27574])
const zoom = ref(12)
const isMapReady = ref(false)

const hillshade: RasterDEMSourceSpecification = {
  type: 'raster-dem',
  url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
  tileSize: 256
}

const layout: HillshadeLayerSpecification['layout'] = { visibility: 'visible' }
const paint: HillshadeLayerSpecification['paint'] = { 'hillshade-shadow-color': '#473B24' }

const terrainSource: RasterDEMSourceSpecification = {
  type: 'raster-dem',
  url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json'
}

function onMapReady(e: VmReadyObject) {
  const { map } = e

  map.on('load', () => {
    map.resize()
    isMapReady.value = true
  })
}
</script>

<template>
  <div class="map-demo-container">
    <VmMap map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom" @ready="onMapReady">
      <VmLayerNative v-if="isMapReady" id="terrainSource" type="raster-dem" :source="terrainSource" />
      <VmLayerNative v-if="isMapReady" id="hillshade" type="hillshade" :source="hillshade" :layout="layout" :paint="paint" />
      <VmControlTerrain v-if="isMapReady" source="hillshade" position="top-left">
        asd
      </VmControlTerrain>
    </VmMap>
  </div>
</template>
