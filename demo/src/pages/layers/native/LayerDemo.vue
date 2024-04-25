<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-04-25 22:14:39
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-26 00:32:17
 * @FilePath: \vue-maplibre\demo\src\pages\layers\native\LayerDemo.vue
-->
<template>
  <div class="test">
    <VmLayerNative id="asdasd" :type="layerType" :source="source" :paint="paint"></VmLayerNative>
  </div>
</template>

<script setup lang="ts">
import { useVueMaplibre } from '@meteosci/vue-maplibre'
import { VmLayerNative, VmLayerNativeProps } from '@vue-maplibre/components'
import { ref } from 'vue'

const $vm = useVueMaplibre()
console.log($vm)

const layerType: VmLayerNativeProps['type'] = 'line'
const source = ref<VmLayerNativeProps['source']>({
  type: 'geojson',
  data: 'https://zouyaoji.top/vue-cesium-demo/datas/china.json'
})

const paint: VmLayerNativeProps['paint'] = ref({
  'line-color': 'rgb(255, 255, 0)'
})
</script>
