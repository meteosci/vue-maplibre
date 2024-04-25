<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-12-18 22:23:14
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-25 23:55:01
 * @FilePath: \vue-maplibre\demo\src\pages\layers\native\Index.vue
-->
<template>
  <div class="page-demo-layer-station">
    <VmMap ref="mapRef" map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom" @click="onClick" @load="onLoad">
      <div v-if="mapReady" class="widget-container">
        <LayerDemo></LayerDemo>
      </div>
    </VmMap>
  </div>
</template>

<script lang="ts" setup>
import { VmMap } from '@vue-maplibre/components'
import { LngLatLike } from 'maplibre-gl'
import { ref } from 'vue'
import LayerDemo from './LayerDemo.vue'

defineOptions({
  name: 'PageLayerNative'
})

const center = ref<LngLatLike>([108, 32])
const zoom = ref(6)
const mapRef = ref(null)
const mapReady = ref(false)


const onClick = e => {
  console.log(e)
}

const onLoad = e => {
  mapReady.value = true
}
</script>

<style lang="scss" scoped>
.page-demo-layer-station {
  width: 100%;
  height: 100%;
}
</style>
