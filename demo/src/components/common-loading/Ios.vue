<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-10 10:54:20
 * @LastEditTime: 2025-03-29 17:50:01
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\components\common-loading\Ios.vue
-->

<template>
  <div class="loading-ios flex column justify-center items-center z-top">
    <q-spinner-ios v-if="!hasError" :size="size" />
    <q-btn v-else icon="error" :size="size" color="red" round flat dense>
      <q-tooltip>加载失败，原因：{{ errorMsg }}</q-tooltip>
    </q-btn>

    <div v-if="!dense">
      <div v-if="!hasError" class="q-pt-md">
        <span> {{ tipText }} </span>
      </div>
      <q-chip v-else clickable color="red" text-color="white" icon="error" @click="onRetry">
        {{ errorTip }}
      </q-chip>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: '3em'
  },
  dense: {
    type: Boolean,
    default: false
  },
  hasError: {
    type: Boolean,
    default: false
  },
  errorMsg: {
    type: String,
    default: ''
  },
  errorTip: {
    type: String,
    default: '数据加载失败，点我重试'
  },
  tipText: {
    type: String,
    default: '加载中...'
  }
})

const emit = defineEmits(['retry'])
const onRetry = () => {
  emit('retry')
}
</script>
