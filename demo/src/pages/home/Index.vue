<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-09 10:18:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-15 14:58:56
 * @FilePath: \vue-maplibre\demo\src\pages\home\Index.vue
-->
<template>
  <div class="page-demo-home" style="width: 100%; height: 100%">
    <div class="text-h2 text-bold">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('代表地球欢迎你')
</script>

<style lang="scss">
.page-demo-home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
