<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-14 23:41:49
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 14:03:53
 * @FilePath: \vue-maplibre\docs\examples\layer-native\openstreetmap.vue
-->
<template>
  <div class="map-demo-container">
    <VmMap map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom" @ready="onMapReady">
      <VmLayerNative v-if="isMapReady" id="openstreetmap-tiles" type="raster" :source="source"></VmLayerNative>
    </VmMap>
  </div>
</template>

<script lang="ts" setup>
import { VmReadyObject } from '@meteosci/vue-maplibre/es/utils'
import { LngLatLike, SourceSpecification } from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([11.39085, 47.27574])
const zoom = ref(1)
const isMapReady = ref(false)

const source: SourceSpecification = {
  type: 'raster',
  tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
  tileSize: 256,
  minzoom: 0,
  maxzoom: 19
}

const onMapReady = (e: VmReadyObject) => {
  const { map } = e

  map.on('load', () => {
    map.resize()
    isMapReady.value = true
  })
}
</script>
