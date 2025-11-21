<script lang="ts" setup>
import type { LngLatLike } from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([108, 32])
const zoom = ref(1)
</script>

<template>
  <div class="map-demo-container">
    <VmMap map-style="https://vue-maplibre.meteosci.com/map/styleWan.json" :center="center" :zoom="zoom" />
  </div>
</template>
