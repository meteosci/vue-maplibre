<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-14 23:41:49
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 14:03:53
 * @FilePath: \vue-maplibre\docs\examples\layer-native\openstreetmap.vue
-->
<script lang="ts" setup>
import type { VmReadyObject } from '@meteosci/vue-maplibre/es/utils'
import type { LngLatLike, SourceSpecification } from 'maplibre-gl'
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
    <VmMap map-style="https://vue-maplibre.meteosci.com/map/styleWan.json" :center="center" :zoom="zoom" @ready="onMapReady">
      <VmLayerNative v-if="isMapReady" id="openstreetmap-tiles" type="raster" :source="source" />
    </VmMap>
  </div>
</template>
