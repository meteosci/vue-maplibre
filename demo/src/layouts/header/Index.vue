<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-20 16:15:37
 * @LastEditTime: 2024-05-13 16:13:43
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\layouts\header\Index.vue
-->
<template>
  <q-toolbar class="main-header">
    <q-avatar class="cursor-pointer" @click="onToggleLeftDrawer">
      <q-icon name="view_list" size="32px"></q-icon>
    </q-avatar>

    <q-toolbar-title :shrink="true" style="width: 500px; font-weight: 400; font-family: YouSheBiaoTiYuan; font-size: 30px">
      {{ title }}
    </q-toolbar-title>

    <div class="menu-container">
      <q-tabs
        v-if="showMenus"
        v-model:model-value="selectedTab"
        align="right"
        inline-label
        indicator-color="cyan-13"
        outside-arrows
        style="max-width: 100%"
        @update:model-value.once="onUpdateSelectedTab"
      >
        <q-route-tab
          v-for="(menu, index) in headerMenus"
          :key="index"
          :name="menu.name"
          :to="menu.path"
          exact
          content-class="menu-tab"
          active-class="menu-active"
        >
          <q-icon size="24px" :name="menu.icon" style="color: #fff; margin-right: 5px" />
          <div style="font-size: 18px">{{ menu.caption }}</div>
        </q-route-tab>
      </q-tabs>
    </div>

    <q-space></q-space>
    <div class="right-btn">
      <!-- 如果你只想在开发环境显示这个按钮请添加 v-if="isDevelopment" -->
      <header-log v-if="isDevelopment"></header-log>
      <header-fullscreen />
      <header-theme />
      <header-user />
    </div>
  </q-toolbar>
</template>
<script setup lang="ts">
import HeaderLog from './log/Index.vue'
import HeaderFullscreen from './fullscreen/Index.vue'
import HeaderTheme from './theme/Index.vue'
import HeaderUser from './user/Index.vue'
import HeaderLocale from './locale/Index.vue'
import { openURL } from 'quasar'
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'
import { store } from '@src/store'
import { storeToRefs } from 'pinia'
import { useTimeout } from 'quasar'
import { ThemeOptions } from '@src/types'

defineOptions({
  name: 'MainHeader'
})

defineProps({
  showMenus: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: import.meta.env.VITE_VUE_APP_TITLE
  }
})

const $route = useRoute()
const searchActive = ref(false)
const selectedTab = ref('')
const { registerTimeout } = useTimeout()
const delay = ref(100)
const menuStore = store.system.useMenuStore()
const layoutStore = store.system.useLayoutStore()
const { global: globalLayout } = storeToRefs(layoutStore)

// const title = computed(() => {
//   return import.meta.env.VITE_VUE_APP_TITLE
// })

const headerMenus = computed(() => {
  const header = menuStore.header
  return header.length ? header[0].children : []
})

const isDevelopment = computed(() => {
  return import.meta.env.MODE === 'development'
})

const asideMenus = computed(() => {
  return menuStore.aside
})

const theme = computed<ThemeOptions>(() => {
  const themeStore = store.system.useThemeStore()
  return themeStore.themeConfig[themeStore.activeName]
})

watch(
  () => $route.matched,
  val => {
    registerTimeout(() => {
      if (val.length > 1) {
        const moduleName = val[1].path.substring(1, val[1].path.length)
        moduleName && (selectedTab.value = moduleName)
      } else {
        selectedTab.value = 'index'
      }
    }, delay.value)
  },
  {
    immediate: true
  }
)

onMounted(() => {
  delay.value = 5
})

const onToggleLeftDrawer = () => {
  layoutStore.toggleGlobalLayout({
    leftDrawerMini: !globalLayout.value.leftDrawerMini
  })
}

const onUpdateSelectedTab = e => {
  if (e === null && $route.matched.length > 1) {
    selectedTab.value = $route.matched[1].path.substring(1, $route.matched[1].path.length)
  } else {
    selectedTab.value = e
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  position: relative;
  display: flex;
  // width: 100vw;
  height: 100%;
  justify-content: space-between;
  pointer-events: all;

  .menu-container {
    width: 80%;
    // margin: 0 auto;
    // padding-left: 150px;
    height: 50px;
    color: #ddd;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    position: relative;
  }

  .right-btn {
    line-height: 42px;
    height: 42px;
    display: flex;
    align-items: center;

    button {
      margin: 0 5px 0 0;
    }
  }
}
</style>
