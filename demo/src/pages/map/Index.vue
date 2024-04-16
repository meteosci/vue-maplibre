<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-09 10:18:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-17 01:38:13
 * @FilePath: \vue-maplibre\demo\src\pages\map\Index.vue
-->
<template>
  <div class="page-demo-map" style="width: 100%; height: 100%">
    <VmMap ref="mapRef" :center="center" :zoom="zoom" @click="onClick" @ready="onMapReady" @load="onLoad"></VmMap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VmMap } from '@vue-maplibre/components'
import { LngLatLike } from 'maplibre-gl'
const onClick = e => {
  console.log(e)
}

const onLoad = e => {
  console.log('onLoad', e)
}

const center = ref<LngLatLike>([114.05, 35.62])
const zoom = ref(6)
const mapRef = ref(null)

const onMapReady = e => {
  console.log('onMapReady', e)
}
// window.zoom = zoom
// window.mapRef = mapRef
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
