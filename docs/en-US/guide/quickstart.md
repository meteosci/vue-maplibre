---
title: Quick Start
lang: en-US
---

# Quick Start

This section describes how to use Vue Maplibre in your project.

## Usage

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.

```typescript
// main.ts
import { createApp } from 'vue'
import VueMaplibre from '@meteosci/vue-maplibre'
import '@meteosci/vue-maplibre/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(VueMaplibre)
app.mount('#app')
```

#### Volar support

If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@meteosci/vue-maplibre/global"]
  }
}
```

### On-demand Import

Vue Maplibre provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

> App.vue

```vue
<template>
  <vm-map map-style="https://demotiles.maplibre.org/style.json"></vm-map>
</template>
<script setup>
import { VmMap } from '@meteosci/vue-maplibre'
</script>
```

## Starter Template

We provide a [Vite Template](https://github.com/meteosci/vue-maplibre-vite-starter).

## Global Configuration

## Let's Get Started

You can bootstrap your project from now on. For each components usage, please
refer to [the individual component documentation](/en-US/component/map.html).
