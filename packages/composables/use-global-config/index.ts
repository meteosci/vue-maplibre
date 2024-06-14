/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-02-09 16:19:57
 * @LastEditTime: 2024-06-14 17:08:54
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\composables\use-global-config\index.ts
 */
import { configProviderContextKey } from '@vue-maplibre/utils/private/config'
import { ConfigProviderContext } from '@vue-maplibre/utils/types'
import { inject, ref, computed, unref, provide, getCurrentInstance } from 'vue'
import type { Ref, App } from 'vue'
import { MaybeRef } from '@vue-maplibre/utils/types'
import { keysOf } from '@vue-maplibre/utils/objects'

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
  } else {
    return config
  }
}

export const provideGlobalConfig = (config: MaybeRef<ConfigProviderContext>, app?: App, global = false) => {
  const inSetup = !!getCurrentInstance()
  const oldConfig = inSetup ? useGlobalConfig() : undefined

  const provideFn = app?.provide ?? (inSetup ? provide : undefined)
  if (!provideFn) {
    console.warn('provideGlobalConfig', 'provideGlobalConfig() can only be used inside setup().')
    return
  }

  const context = computed(() => {
    const cfg = unref(config)
    if (!oldConfig?.value) return cfg
    return mergeConfig(oldConfig.value, cfg)
  })

  if (app?.provide) {
    app.provide(configProviderContextKey, context)
  } else {
    provide(configProviderContextKey, context)
  }

  if (global || !globalConfig.value) {
    globalConfig.value = context.value
  }
  return context
}

const mergeConfig = (a: ConfigProviderContext, b: ConfigProviderContext): ConfigProviderContext => {
  const keys = [...new Set([...keysOf(a), ...keysOf(b)])]
  const obj: Record<string, any> = {}
  for (const key of keys) {
    obj[key] = b[key] ?? a[key]
  }
  return obj
}
