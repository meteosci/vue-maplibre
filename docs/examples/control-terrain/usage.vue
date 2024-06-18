<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-14 23:41:49
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 14:03:30
 * @FilePath: \vue-maplibre\docs\examples\control-terrain\usage.vue
-->
<template>
  <div class="map-demo-container">
    <VmMap map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom" @ready="onMapReady">
      <VmControlTerrain v-if="isMapReady" source="hillshadeSource" position="top-left">asd</VmControlTerrain>
    </VmMap>
  </div>
</template>

<script lang="ts" setup>
import { VmReadyObject } from '@meteosci/vue-maplibre/es/utils'
import { LngLatLike } from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([11.39085, 47.27574])
const zoom = ref(12)
const isMapReady = ref(false)

const onMapReady = (e: VmReadyObject) => {
  console.log('onMapReady', e)
  const { map } = e

  map.on('load', () => {
    map.resize()
    map.addSource('terrainSource', {
      type: 'raster-dem',
      url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json'
    })

    map.setTerrain({
      source: 'terrainSource'
    })

    map.addSource('hillshadeSource', {
      type: 'raster-dem',
      url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
      tileSize: 256
    })

    map.addLayer({
      id: 'hills',
      type: 'hillshade',
      source: 'hillshadeSource',
      layout: { visibility: 'visible' },
      paint: { 'hillshade-shadow-color': '#473B24' }
    })
    isMapReady.value = true
  })
}
</script>
