<template>
  <div class="map-demo-container">
    <vm-map map-style="https://demotiles.maplibre.org/style.json" :center="center" :zoom="zoom"></vm-map>
  </div>
</template>

<script lang="ts" setup>
import { LngLatLike } from 'maplibre-gl'
import { ref } from 'vue'

const center = ref<LngLatLike>([108, 32])
const zoom = ref(1)
</script>
