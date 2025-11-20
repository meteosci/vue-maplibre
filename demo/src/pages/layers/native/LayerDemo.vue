<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-25 22:14:39
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-29 02:32:41
 * @FilePath: \vue-maplibre\demo\src\pages\layers\native\LayerDemo.vue
-->
<script setup lang="ts">
import type { VmLayerNativeProps } from '@vue-maplibre/components'
import type { SourceSpecification } from 'maplibre-gl'
import { useVueMaplibre } from '@meteosci/vue-maplibre'
import { VmLayerNative } from '@vue-maplibre/components'
import { ref } from 'vue'

const $vm = useVueMaplibre()
console.log($vm)

// const source = ref<VmLayerNativeProps['source']>({
//   type: 'geojson',
//   data: 'https://zouyaoji.top/vue-cesium-demo/datas/china.json'
// })

const source: SourceSpecification = {
  type: 'raster',
  tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
  tileSize: 256,
  minzoom: 0,
  maxzoom: 19
}
const paint: VmLayerNativeProps['paint'] = ref({
  'line-color': 'rgb(255, 255, 0)'
})
</script>

<template>
  <div class="test">
    <VmLayerNative id="openstreetmap-tiles" type="raster" :source="source" />
  </div>
</template>
