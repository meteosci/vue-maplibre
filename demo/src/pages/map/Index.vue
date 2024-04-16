<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-09 10:18:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-16 10:46:06
 * @FilePath: \vue-maplibre\demo\src\pages\map\Index.vue
-->
<template>
  <div class="page-demo-map" style="width: 100%; height: 100%">
    <VmMap @click="onClick" @load="onLoad"></VmMap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VmMap } from '@vue-maplibre/components'
const onClick = e => {
  console.log(e)
}

const onLoad = e => {
  console.log('onLoad', e)
}
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
