---
title: Config Provider
lang: en-US
---

# Config Provider

Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere.

## i18n Configurations

Configure i18n related properties via Config Provider, to get language switching feature.

:::demo Use two attributes to provide i18n related config

config-provider/usage

:::

## API

### Props

| Name       | Description                                                                                                                                                        | Type                     | Default |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------- |
| locale     | the locale Object.                                                                                                                                                 | ^[object]`Language`      | -       |
| reloadMode | If multiple component properties are changed at once. 'all' means reload them in sequence; 'once' means reload only once after the last property has been changed. | ^[enum]`'once' \| 'all'` | -       |

### Slots

| Name    | Description                                               |
| ------- | --------------------------------------------------------- |
| default | Default slot content of the vm-config-provider component. |
