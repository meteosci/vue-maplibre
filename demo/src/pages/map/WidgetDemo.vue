<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-17 16:22:34
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-09-12 20:50:27
 * @FilePath: \vue-maplibre\demo\src\pages\map\WidgetDemo.vue
-->
<template>
  <div class="test"></div>
</template>

<script setup lang="ts">
import { useVueMaplibre } from '@meteosci/vue-maplibre'

const $vm = useVueMaplibre()
console.log($vm.vmMitt.all)
</script>
