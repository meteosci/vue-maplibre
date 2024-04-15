<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-12-18 22:23:14
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-15 14:58:12
 * @FilePath: \vue-maplibre\demo\src\pages\layers\station\Index.vue
-->
<template>
  <div class="page-demo-layer-station">
    站点图层
  </div>
</template>

<script lang="ts" setup>
// import MaplibreGl from '@src/components/map/Index.vue'
// import MapLogic from './MapLogic.vue'
import { ref } from 'vue'

defineOptions({
  name: 'PageDemoMap'
})

const isMapReady = ref(false)
const onMapReady = () => {
  isMapReady.value = true
}
</script>

<style lang="scss" scoped>
.page-demo-layer-station {
  width: 100%;
  height: 100%;
}
</style>
