<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-18 15:50:49
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 15:59:51
 * @FilePath: \vue-maplibre\docs\examples\map\map-style.vue
-->
<template>
  <div class="map-demo-container">
    <VmMap map-style="https://vue-maplibre.meteosci.com/style/mapbox-streets-zh-hans.json" :center="center" :zoom="zoom"></VmMap>
  </div>
</template>

<script lang="ts" setup>
import { LngLatLike } from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([108, 32])
const zoom = ref(1)
</script>
