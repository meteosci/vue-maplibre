<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-18 15:50:49
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-07-25 12:02:54
 * @FilePath: \vue-maplibre\docs\examples\map\map-style.vue
-->
<template>
  <div class="map-demo-container">
    <VmMap map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom" @ready="onMapReady"></VmMap>
  </div>
</template>

<script lang="ts" setup>
import { LngLatLike, StyleSpecification } from 'maplibre-gl'
import { ref } from 'vue'
import mapStyleMapbox from './style'
import { VmReadyObject } from '@vue-maplibre/utils'
const center = ref<LngLatLike>([108, 32])
const zoom = ref(1)

const onMapReady = (e: VmReadyObject) => {
  const { map } = e
  map.on('load', () => {
    // 强制刷新一次
    map.resize()
    map.setStyle(mapStyleMapbox as StyleSpecification, {
      validate: false
    })
  })
}
</script>
