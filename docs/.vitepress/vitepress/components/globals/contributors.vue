<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-18 09:37:40
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-21 11:14:58
 * @FilePath: \vue-maplibre\docs\.vitepress\vitepress\components\globals\contributors.vue
-->
<script setup lang="ts">
import { computed } from 'vue'
import _contributors from '@vue-maplibre/metadata/dist/contributors.json'
import VpLink from '../common/vp-link.vue'

const props = defineProps<{ id: string }>()

const contributors = computed(() =>
  _contributors[props.id]?.filter((c) => c.login !== 'renovate[bot]')
)

const withSize = (rawURL: string) => {
  return `${rawURL}${rawURL.includes('?') ? '&' : '?'}size=64`
}
</script>

<template>
  <div class="mb-4">
    <div class="flex flex-wrap gap-4 pt-2">
      <div v-for="c of contributors" :key="c.hash">
        <vp-link
          :href="`https://github.com/${c.login}`"
          class="flex gap-2 items-center link"
          no-icon
        >
          <img
            :src="withSize(c.avatar)"
            class="w-8 h-8 rounded-full"
            loading="lazy"
          />
          {{ c.name }}
        </vp-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
  color: var(--text-color-light);

  &:hover {
    color: var(--brand-color);
  }
}
</style>
