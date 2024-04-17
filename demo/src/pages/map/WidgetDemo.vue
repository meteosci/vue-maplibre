<template>
  <div class="test"></div>
</template>

<script setup lang="ts">
import { useVueMaplibre } from '@meteosci/vue-maplibre'

const $vm = useVueMaplibre()
console.log($vm)
</script>
