<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-08 23:26:13
 * @LastEditTime: 2024-01-09 15:03:29
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \demo\src\App.vue
-->
<template>
  <router-view />
</template>

<style lang="scss">
@import '@src/assets/style/animate/animate.min.css';

:root {
  --themeColor: #ccc;
  --themeColorAlpha: rgba(#fff, 0.6);
  --themeBGColor: #ebf1f6;
  --themeBGMaskColor: rgba(#000, 0);
  --themeScrollTopBackgroundColor: rgba(0, 0, 0, 0);
  --themeQInputColor: #666;
  --themeQInputBorderColor: #ccc;
  --themeQCheckboxTruthyColor: #1976d2;
  --themeQMenuColor: #fff;
  --themeQMenuBackgroundColor: rgba(0, 68, 82, 0.6);
  --themeQCardColor: #fff;
  --themeQCardBackgroundColor: rgba(0, 68, 82, 0.6);
  --themeQScrollAreaColor: #fff;
}

.loading-ios {
  color: var(--themeColor);
}

.scroll-top {
  color: var(--themeColor);
  background: var(--themeScrollTopBackgroundColor);
}

// q-input

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
}
.q-field__label,
.q-field__control,
.q-field--highlighted .q-field__control {
  color: var(--themeColor) !important;
}
.q-field__control:before {
  border-color: var(--themeQInputBorderColor) !important;
}
.q-field__control:hover:before {
  border-color: var(--themeColor) !important;
}
.q-field__input,
.q-field__native,
.q-field__prefix,
.q-field__suffix {
  color: var(--themeQInputColor);
}

// q-checkbox
.q-checkbox__inner--truthy,
.q-checkbox__inner--indet,
.q-radio__inner--truthy {
  color: var(--themeQCheckboxTruthyColor);
}
.q-checkbox__inner--falsy,
.q-radio__inner--falsy {
  color: var(--themeCommonPanelListBorderColor);
}

// q-scroll-area
.q-scrollarea__thumb {
  background: var(--themeQScrollAreaColor);
}

// q-menu
.q-menu {
  color: var(--themeQMenuColor);
  background: var(--themeQMenuBackgroundColor);
}

// q-card
.q-card,
.q-tab-panels {
  color: var(--themeQCardColor);
  background: var(--themeQCardBackgroundColor);
}

.card-header {
  background: var(--themeQCardHeaderBackgroundColor);
}

.el-popper {
  z-index: 8000 !important;
}

.vxe-date-input-top {
  z-index: 8000 !important;
}
</style>
