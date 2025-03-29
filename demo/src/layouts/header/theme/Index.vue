<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-04 15:24:45
 * @LastEditTime: 2025-03-29 17:45:06
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\layouts\header\theme\Index.vue
-->
<template>
  <q-btn
    v-if="$route.name !== 'login'"
    icon="style"
    size="md"
    flat
    round
    @click="dialogVisible = true"
  >
    <q-tooltip>主题</q-tooltip>
  </q-btn>
  <q-dialog v-model="dialogVisible">
    <q-card style="width: 650px">
      <q-card-section class="row items-center q-pb-none q-pt-xs card-header">
        <div class="text-h6">
          主题
        </div>
        <q-space />
        <q-btn
          v-close-popup
          icon="close"
          flat
          round
          dense
        >
          <q-tooltip>关闭</q-tooltip>
        </q-btn>
      </q-card-section>

      <q-card-section class="theme-card">
        <theme-list />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ThemeList from './ThemeList.vue'
const dialogVisible = ref(false)
</script>
