<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-14 17:24:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 14:03:03
 * @FilePath: \vue-maplibre\docs\examples\config-provider\usage.vue
-->
<script lang="ts" setup>
import type { LngLatLike } from 'maplibre-gl'

// 本地
// import en from '@vue-maplibre/locale/lang/en-us'
// import zhCn from '@vue-maplibre/locale/lang/zh-cn'

// npm
import en from '@meteosci/vue-maplibre/dist/locale/en-us.mjs'
import zhCn from '@meteosci/vue-maplibre/dist/locale/zh-cn.mjs'
import { computed, ref } from 'vue'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const center = ref<LngLatLike>([108, 32])
const zoom = ref(1)

function toggle() {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>

<template>
  <div class="map-demo-container">
    <div class="toolbar">
      <el-button mb-2 @click="toggle">
        Switch Language: {{ locale.nativeName }}
      </el-button>
    </div>
    <VmConfigProvider :locale="locale">
      <VmMap map-style="https://vue-maplibre.meteosci.com/map/styleWan.json" :center="center" :zoom="zoom">
        <VmControlNavigation />
      </VmMap>
    </VmConfigProvider>
  </div>
</template>
