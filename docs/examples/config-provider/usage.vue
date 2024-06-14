<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-14 17:24:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-14 22:04:23
 * @FilePath: \vue-maplibre\docs\examples\config-provider\usage.vue
-->
<template>
  <div class="map-demo-container">
    <div class="toolbar">
      <el-button mb-2 @click="toggle">Switch Language: {{ locale.nativeName }}</el-button>
    </div>
    <VmConfigProvider :locale="locale">
      <VmMap map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom">
        <VmControlNavigation></VmControlNavigation>
      </VmMap>
    </VmConfigProvider>
  </div>
</template>

<script lang="ts" setup>
import { LngLatLike } from 'maplibre-gl'
import { computed, ref } from 'vue'
import zhCn from '@vue-maplibre/locale/lang/zh-cn'
import en from '@vue-maplibre/locale/lang/en-us'

// import zhCn from '@vue-maplibre/dist/locale/zh-cn.mjs'
// import en from '@vue-maplibre/dist/locale/en-us.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const center = ref<LngLatLike>([108, 32])
const zoom = ref(1)

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
