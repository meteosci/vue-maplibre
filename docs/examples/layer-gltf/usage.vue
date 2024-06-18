<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-17 11:40:44
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 13:59:05
 * @FilePath: \vue-maplibre\docs\examples\layer-gltf\usage.vue
-->
<template>
  <div class="map-demo-container">
    <VmMap map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom" :pitch="60" :bearing="-28.5" @ready="onMapReady">
      <VmLayerGltf
        v-if="isMapReady"
        :position="[148.9819, -35.39847, 0]"
        url="https://vue-maplibre.meteosci.com/model/gltf/34M_17/34M_17.gltf"
      ></VmLayerGltf>

      <VmLayerNative v-if="isMapReady" id="openstreetmap-tiles" type="raster" :source="source"></VmLayerNative>
    </VmMap>
  </div>
</template>

<script lang="ts" setup>
import { VmReadyObject } from '@meteosci/vue-maplibre/es/utils'
import { LngLatLike, Map, SourceSpecification } from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([148.9819, -35.3981])
const zoom = ref(18)

const isMapReady = ref(false)
const source: SourceSpecification = {
  type: 'raster',
  tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
  tileSize: 256,
  minzoom: 0,
  maxzoom: 19
}
let _map: Map

const onMapReady = (e: VmReadyObject) => {
  const { map } = e

  map.on('load', () => {
    map.resize()
    isMapReady.value = true
    _map = map
  })
}
</script>
