<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-12-18 22:23:14
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-28 23:21:41
 * @FilePath: \vue-maplibre\demo\src\pages\layers\native\Index.vue
-->
<template>
  <div class="page-demo-layer-station">
    <VmMap
      ref="mapRef"
      :map-style="{
        version: 8,
        layers: [
          {
            id: 'baseColor', // Hides edges of terrain tiles, which have 'walls' going down to 0.
            type: 'background',
            paint: {
              'background-color': '#fff',
              'background-opacity': 1.0
            }
          },
          {
            id: 'hills',
            type: 'hillshade',
            source: 'hillshadeSource',
            layout: { visibility: 'visible' },
            paint: { 'hillshade-shadow-color': '#473B24' }
          }
        ],
        terrain: {
          source: 'terrainSource',
          exaggeration: 1
        },
        sources: {
          terrainSource: {
            type: 'raster-dem',
            url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
            tileSize: 256
          },
          hillshadeSource: {
            type: 'raster-dem',
            url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
            tileSize: 256
          }
        }
      }"
      :center="center"
      :zoom="zoom"
      :pitch="60"
      :bearing="-28.5"
      @click="onClick"
      @load="onLoad"
    >
      <div v-if="mapReady" class="widget-container">
        <LayerDemo></LayerDemo>

        <VmLayerGltf
          :position="[11.527, 47.6678, 2000]"
          url="https://vue-maplibre.meteosci.com/model/gltf/34M_17/34M_17.gltf"
          @loaded="onLoaded"
          @ready="onLoaded"
        ></VmLayerGltf>
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

const center = ref<LngLatLike>([11.5257, 47.668])
const zoom = ref(16.27)
const mapRef = ref(null)
const mapReady = ref(false)

const onClick = e => {
  console.log(e)
}

const onLoad = e => {
  mapReady.value = true
}

const onLoaded = e => {
  console.log(e)
}
</script>

<style lang="scss" scoped>
.page-demo-layer-station {
  width: 100%;
  height: 100%;
}
</style>
