<script setup lang="ts">
import { version as epVersion } from '@meteosci/vue-maplibre'
import { inBrowser, useData, withBase } from 'vitepress'
import { computed } from 'vue'
import VPNavbarHamburger from './navbar/vp-hamburger.vue'
import VPNavbarMenu from './navbar/vp-menu.vue'
// import VPNavbarSearch from './navbar/vp-search.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarTranslation from './navbar/vp-translation.vue'

defineProps<{
  fullScreen: boolean
}>()

defineEmits(['toggle'])

const { theme, page, site } = useData()

const currentLink = computed(() => {
  if (!inBrowser) {
    return `/${page.value?.frontmatter?.lang || ''}/`
  }
  const existLangIndex = theme.value.langs.findIndex(lang =>
    window?.location?.pathname.startsWith(`${site.value.base}${lang}`)
  )

  return existLangIndex === -1 ? '/' : `/${theme.value.langs[existLangIndex]}/`
})
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a :href="withBase(currentLink)">
          <img
            class="logo"
            src="/images/vue-maplibre-logo.svg"
            alt="Vue Maplibre Logo"
          >
        </a>
        <el-tag round size="small" title="latest version">
          {{
            epVersion.replace('0.0.0-staging.', '')
          }}
        </el-tag>
      </div>
      <div class="content">
        <!-- <VPNavbarSearch class="search" :options="theme.agolia" multilang /> -->
        <VPNavbarMenu class="menu" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarTranslation class="translation" />
        <VPNavbarSocialLinks class="social-links" />
        <VPNavbarHamburger
          :active="fullScreen"
          class="hamburger"
          @click="$emit('toggle')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
  > a {
    height: 28px;
    width: 128px;
  }
  .logo {
    position: relative;
    height: 100%;
  }
}
.dark {
  .logo {
    filter: drop-shadow(2px 2px 6px #409eff);
  }
}
</style>
