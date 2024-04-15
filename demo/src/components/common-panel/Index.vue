<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-04 17:20:35
 * @LastEditTime: 2024-01-09 17:37:18
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \demo\src\components\common-panel\Index.vue
-->
<template>
  <q-card class="common-panel">
    <q-bar class="header" :class="titleClass" :style="{ height: barHeight }">
      <div class="bar"></div>
      <div v-if="title !== ''" class="text-title">{{ title }}</div>
      <slot name="header-left"></slot>
      <q-space />
      <slot name="header-right"></slot>
      <q-btn v-if="showCloseBtn" v-close-popup dense flat icon="close" @click="onClose">
        <q-tooltip>{{ closeTip }}</q-tooltip>
      </q-btn>
    </q-bar>
    <q-separator v-if="separatorOpts.show" v-bind="separatorOpts" class="separator-line" />
    <div class="content">
      <slot></slot>
    </div>
  </q-card>
</template>

<script lang="ts" setup>
import { store } from '@src/store'
import { ThemeOptions } from '@src/types'
import { computed } from 'vue'

defineOptions({
  name: 'CommonPanel'
})

// props
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: ''
  },
  closeTip: {
    type: String,
    default: '关闭'
  },
  showCloseBtn: {
    type: Boolean,
    default: true
  },
  separatorOpts: {
    type: Object,
    default: () => ({
      show: true,

      size: '1px'
    })
  },
  barHeight: {
    type: String,
    default: '40px'
  }
})
// state
const emit = defineEmits(['close'])

const onClose = evt => {
  emit('close', evt)
}

const theme = computed<ThemeOptions>(() => {
  const themeStore = store.system.useThemeStore()
  return themeStore.themeConfig[themeStore.activeName]
})
</script>

<style lang="scss" scoped>
.common-panel.q-card {
  color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  .header {
    color: v-bind('theme.commonPanel.themeCommonPanelHeaderColor');
    background: v-bind('theme.commonPanel.themeCommonPanelHeaderBackgroundColor');
    .bar {
      width: 6px;
      height: 18px;
      background: v-bind('theme.commonPanel.themeCommonPanelBarBackgroundColor');
      border-radius: 3px;
    }
    .text-title {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .separator-line {
    background: v-bind('theme.commonPanel.themeCommonPanelListBorderColor');
  }
  .content {
    // height: 100%;
    color: v-bind('theme.commonPanel.themeCommonPanelContentColor');
    background: v-bind('theme.commonPanel.themeCommonPanelContentBackgroundColor');
    .q-list {
      color: v-bind('theme.commonPanel.themeCommonPanelListColor');
      border-color: v-bind('theme.commonPanel.themeCommonPanelListBorderColor');
      .q-expansion-item--expanded .q-item__section--side {
        color: v-bind('theme.global.themeColorAlpha');
      }
      .q-item-type + .q-item-type {
        border-top-color: v-bind('theme.commonPanel.themeCommonPanelListBorderColor');
      }
      .dataset-icon,
      .location-icon,
      .feature-info-field-icon {
        color: v-bind('theme.global.themeColor');
      }
      .q-item__label--caption {
        color: v-bind('theme.commonPanel.themeCommonPanelListColor');
      }
    }
    .q-separator {
      background: v-bind('theme.commonPanel.themeCommonPanelListBorderColor');
    }
  }
}
</style>
