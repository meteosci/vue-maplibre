<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-09 10:18:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-18 22:21:50
 * @FilePath: \vue-maplibre\demo\src\pages\map\Index.vue
-->
<template>
  <div class="page-demo-map" style="width: 100%; height: 100%">
    <VmMap
      ref="mapRef"
      map-style="https://demotiles.maplibre.org/style.json"
      :center="center"
      :zoom="zoom"
      @click="onClick"
      @ready="onMapReady"
      @load="onLoad"
    >
      <div v-if="mapReady" class="widget-container">
        <WidgetDemo></WidgetDemo>
      </div>
      <VmLayerGltf :position="position"></VmLayerGltf>
      <VmControlNavigation></VmControlNavigation>
    </VmMap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VmMap, VmLayerGltf, VmLayerGltfProps, VmControlNavigation } from '@vue-maplibre/components'
import { LngLatLike } from 'maplibre-gl'
import WidgetDemo from './WidgetDemo.vue'

const center = ref<LngLatLike>([108, 32])
const position = ref<VmLayerGltfProps['position']>([108, 32, 0])
const zoom = ref(18)
const mapRef = ref(null)
const mapReady = ref(false)

const onClick = e => {
  console.log(e)
}

const onLoad = e => {
  console.log('onLoad', e)
}

const onMapReady = e => {
  console.log('onMapReady', e)
  mapReady.value = true
}
// window.zoom = zoom
window.mapRef = mapRef
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
