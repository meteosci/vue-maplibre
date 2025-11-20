/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-02 17:46:41
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-26 01:33:42
 * @FilePath: \vue-maplibre\packages\composables\private\use-global-config.ts
 */

import type { ConfigProviderContext, MaybeRef } from '@vue-maplibre/utils/types'
import type { App, Ref } from 'vue'
import { keysOf } from '@vue-maplibre/utils/objects'
import { configProviderContextKey } from '@vue-maplibre/utils/private/config'
import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue'

const globalConfig = ref<ConfigProviderContext>()

export function useGlobalConfig<K extends keyof ConfigProviderContext, D extends ConfigProviderContext[K]>(
  key: K,
  defaultValue?: D
): Ref<Exclude<ConfigProviderContext[K], undefined> | D>

export function useGlobalConfig(): Ref<ConfigProviderContext>
export function useGlobalConfig(key?: keyof ConfigProviderContext, defaultValue = undefined) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue)
  }
  else {
    return config
  }
}

export function provideGlobalConfig(config: MaybeRef<ConfigProviderContext>, app?: App, global = false) {
  const inSetup = !!getCurrentInstance()
  const oldConfig = inSetup ? useGlobalConfig() : undefined

  const provideFn = app?.provide ?? (inSetup ? provide : undefined)
  if (!provideFn) {
    console.warn('provideGlobalConfig', 'provideGlobalConfig() can only be used inside setup().')
    return
  }

  const context = computed(() => {
    const cfg = unref(config)
    if (!oldConfig?.value)
      return cfg
    return mergeConfig(oldConfig.value, cfg)
  })

  if (app?.provide) {
    app.provide(configProviderContextKey, context)
  }
  else {
    provide(configProviderContextKey, context)
  }

  if (global || !globalConfig.value) {
    globalConfig.value = context.value
  }
  return context
}

function mergeConfig(a: ConfigProviderContext, b: ConfigProviderContext): ConfigProviderContext {
  const keys = [...new Set([...keysOf(a), ...keysOf(b)])]
  const obj: Record<string, any> = {}
  for (const key of keys) {
    obj[key] = b[key] ?? a[key]
  }
  return obj
}
