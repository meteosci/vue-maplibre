<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-14 16:36:31
 * @LastEditTime: 2024-03-04 16:46:19
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \template-project\src\layouts\MainLayout.vue
-->
<template>
  <q-layout view="hHh lpR fFf" class="main-layout" :class="{ 'gray-mode': grayActive }">
    <q-header elevated class="main-header-container">
      <main-header />
    </q-header>
    <q-drawer v-if="asideMenus?.length" v-model="drawer" show-if-above :breakpoint="500" bordered :mini="globalLayout.leftDrawerMini" :width="200">
      <q-scroll-area class="fit">
        <q-list class="drawer-menu-list">
          <template v-for="(menuItem, index) in asideMenus" :key="index">
            <q-expansion-item
              v-if="menuItem.children?.filter(v => v.type === 10).length"
              expand-separator
              icon="perm_identity"
              label="Account settings"
              caption="John Doe"
            >
              <template #header>
                <q-item-section avatar>
                  <q-icon :class="`dl-icons dl-icon-${menuItem.icon}`" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.caption }}
                </q-item-section>
              </template>
              <q-list>
                <template v-for="(subItem, subIndex) in menuItem.children" :key="index + '_' + subIndex">
                  <q-item
                    v-ripple
                    clickable
                    active-class="menu-active-item"
                    :active="subItem.name === currentRouteName"
                    @click="$router.push(subItem.path)"
                  >
                    <q-item-section side> </q-item-section>
                    <q-item-section avatar>
                      <q-icon :name="subItem.icon" />
                    </q-item-section>
                    <q-item-section>
                      {{ subItem.caption }}
                    </q-item-section>
                    <q-tooltip
                      v-if="globalLayout.leftDrawerMini"
                      transition-show="scale"
                      transition-hide="scale"
                      anchor="center right"
                      self="center left"
                    >
                      {{ subItem.caption }}
                    </q-tooltip>
                  </q-item>
                </template>
              </q-list>
            </q-expansion-item>
            <q-item
              v-else
              v-ripple
              clickable
              active-class="menu-active-item"
              :active="menuItem.name === currentRouteName"
              @click="$router.push(menuItem.path)"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.caption }}
              </q-item-section>
              <q-tooltip v-if="globalLayout.leftDrawerMini" transition-show="scale" transition-hide="scale" anchor="center right" self="center left">
                {{ menuItem.caption }}
              </q-tooltip>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page :style-fn="myTweak">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from 'vue'
import { get } from 'lodash'
import MainHeader from '@src/layouts/header/Index.vue'
import { pinia } from '@src/store'
import { store } from '@src/store'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
import mitt, { Emitter } from 'mitt'
import { AppFullscreen } from 'quasar'
import { CTEventProvider, CTMittEvents, ThemeOptions } from '@src/types'
import { ctKey } from '@src/config/key'

defineOptions({
  name: 'MainLayout'
})

const $route = useRoute()
// state
const globalLayout = storeToRefs(store.system.useLayoutStore()).global
const { active: grayActive } = storeToRefs(store.system.useGrayStore())
const menuStore = store.system.useMenuStore()
const themeStore = store.system.useThemeStore()

const drawer = ref(false)

const ctMitt: Emitter<CTMittEvents> = mitt()

// 用户登录后从本地数据库加载一系列的设置
store.system.useAccountStore().load()

// computed
const headerMenus = computed(() => {
  const header = menuStore.header
  return header.length ? header[0].children : []
})

const asideMenus = computed(() => {
  return menuStore.aside
})

const currentRouteName = computed(() => {
  return $route.name
})

const theme = computed<ThemeOptions>(() => {
  return themeStore.themeConfig[themeStore.activeName]
})

// watch
let initialTriggered = false
// watch
watch(
  () => $route.matched,
  val => {
    if (initialTriggered) {
      //  路由改变时 如果全局的一些布局需要重置，如果全局弹窗关闭，逻辑写到这儿
      const layoutStore = store.system.useLayoutStore()
      // layoutStore.radarInfoPanel.show = false
    }
    if (val.length > 1) {
      const side = headerMenus.value.filter(menu => menu.path === val[1].path)
      if (side.length) {
        const children = side[0]?.children?.filter(v => (import.meta.env.MODE === 'development' ? v.type === 10 : v.type === 10))
        if (children?.length) {
          menuStore.asideSet(children)
        } else {
          menuStore.asideSet([])
        }
      } else {
        menuStore.asideSet([])
      }
    }
    initialTriggered = true
  },
  {
    immediate: true
  }
)

// lifecyle
onMounted(() => {
  window.onunhandledrejection = error => {
    store.system.useLogStore(pinia).push({
      message: get(error, 'reason.message', 'Unknown error'),
      type: 'danger',
      meta: {
        error: get(error, 'reason'),
        trace: get(error, 'reason.stack')
      }
    })
  }
  window.onerror = (event, source, lineno, colno, error) => {
    store.system.useLogStore(pinia).push({
      message: get(error, 'message', 'Unknown error'),
      type: 'danger',
      meta: {
        error,
        trace: get(error, 'stack'),
        source: `${source}@${lineno}:${colno}`,
        event: event
      }
    })
  }

  window.addEventListener('beforeunload', function (e) {
    //
  })

  window.addEventListener('keydown', function (e) {
    if (e.code === 'F11') {
      e.preventDefault()
      AppFullscreen.toggle()
    }
  })
})

const getServices = () => {
  return {
    mitt: ctMitt
  }
}

const myTweak = offset => {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration

  // this is actually what the default style-fn does in Quasar
  return { height: `calc(100vh - ${50}px)`, backgroundColor: '#f6f6f6' }
}

/**
 * 为所有子组件提供全局事件钩子。
 */
provide<CTEventProvider>(ctKey, getServices())
</script>
<style lang="scss" scoped>
.main-layout {
  width: 100%;
  overflow: hidden;
  position: relative;

  ::v-deep(.q-drawer--left) {
    background: var(--themeQMenuBackgroundColor);
  }

  &.gray-mode {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
  }

  & > .main-header-container {
    // height: 75px;
    width: 100%;
    z-index: 2;
    // background: url('/images/header_bg.png');
    // background-image: linear-gradient(25deg, #00023e, #15416d, #1c829f, #01c8d4);
    // background-image: linear-gradient(25deg, #000000, #333333, #666666, #999999);
    background-image: v-bind('theme.header.themeHeaderContentBackgroundColor');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // background-color: v-bind('theme.header.themeHeaderContentBackgroundColor');
  }

  .drawer-menu-list {
    color: v-bind('theme.menu.themeMenuColor') !important;
    .menu-active-item {
      color: v-bind('theme.menu.themeMenuActiveColor');
      font-size: 16px;
      background-color: v-bind('theme.menu.themeMenuActiveBackgroundColor');
    }
  }
}

:deep(.q-item__section--avatar) {
  align-items: center;
  padding-right: 0px;
}
</style>
