<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-14 23:41:49
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-14 23:57:46
 * @FilePath: \vue-maplibre\docs\examples\navigation\usage.vue
-->
<template>
  <div class="map-demo-container">
    <VmMap map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom">
      <VmControlNavigation position="top-left">asd</VmControlNavigation>
      <VmControlNavigation position="top-right"></VmControlNavigation>
      <VmControlNavigation position="bottom-left"></VmControlNavigation>
    </VmMap>
  </div>
</template>

<script lang="ts" setup>
import { LngLatLike } from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([108, 32])
const zoom = ref(1)
</script>
