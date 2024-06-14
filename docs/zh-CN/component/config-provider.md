---
title: 全局配置
lang: zh-CN
---

# Config Provider 全局配置

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。

## i18n 配置

通过 Config Provider 来配置多语言，让你的应用可以随时切换语言。

:::demo 使用两个属性来提供 i18n 相关配置

config-provider/usage

:::

## API

### Props

| 名称       | 说明                                                                                                                                                               | 类型                     | 默认值 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------ |
| locale     | the locale Object.                                                                                                                                                 | ^[object]`Language`      | -      |
| reloadMode | If multiple component properties are changed at once. 'all' means reload them in sequence; 'once' means reload only once after the last property has been changed. | ^[enum]`'once' \| 'all'` | -      |

### Slots

| 名称    | 说明                                                      |
| ------- | --------------------------------------------------------- |
| default | Default slot content of the vm-config-provider component. |
