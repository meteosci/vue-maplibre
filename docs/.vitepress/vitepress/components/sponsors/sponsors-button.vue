<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-08 19:56:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-13 21:59:50
 * @FilePath: \vue-maplibre\docs\.vitepress\vitepress\components\sponsors\sponsors-button.vue
-->
<template>
  <div class="join">
    <el-tooltip placement="top" :hide-after="1000" :offset="20">
      <template #content>
        {{ homeLang['21'] }}
        <a href="mailto:370681295@qq.com" target="_blank">
          &nbsp;370681295@qq.com
        </a>
      </template>
      <a href="mailto:370681295@qq.com" target="_blank">
        <el-button style="overflow: hidden" :round="round">{{
          homeLang['20']
        }}</el-button>
      </a>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])

defineProps<{ round?: boolean }>()
</script>
