<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-09 10:18:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-09-12 20:50:36
 * @FilePath: \vue-maplibre\demo\src\pages\home\Index.vue
-->
<script setup lang="ts">
import { useVueMaplibre } from '@vue-maplibre/composables'
import { ref } from 'vue'

const message = ref('代表地球欢迎你')
const $vm = useVueMaplibre()
console.log($vm.vmMitt.all)
</script>

<template>
  <div class="page-demo-home" style="width: 100%; height: 100%">
    <div class="text-h2 text-bold">
      {{ message }}
    </div>
  </div>
</template>

<style lang="scss">
.page-demo-home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
