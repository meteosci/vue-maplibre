<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-04 15:23:46
 * @LastEditTime: 2024-01-09 16:29:27
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \demo\src\layouts\header\user\Index.vue
-->
<template>
  <q-chip
    v-if="$route.name !== 'login'"
    rounded
    no-caps
    size="md"
    class="q-mr-sm cursor-pointer user-chip"
    auto-close
    icon="person"
    text-color="white"
    :label="user.info?.username"
  >
    <q-menu>
      <q-list dense>
        <q-item v-close-popup clickable dense @click="onItemClick">
          <q-item-section avatar>
            <q-avatar icon="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>注销</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-chip>
</template>

<script lang="ts" setup>
import { store } from '@src/store'
import { ref } from 'vue'

const { toggleGlobalLayout } = store.system.useLayoutStore()
const user = store.system.useUserStore()

const onItemClick = () => {
  store.system
    .useAccountStore()
    .logout({
      confirm: true
    })
    .then(isLogout => {
      if (isLogout) {
        // 注销后默认显示的图层
        toggleGlobalLayout({ featureInfo: false, layerManager: false })
      }
    })
}
</script>

<style lang="scss" scoped>
.user-chip {
  background: #2c47ab;
}
</style>
