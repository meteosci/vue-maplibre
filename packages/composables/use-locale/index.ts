/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-07 15:49:08
 * @LastEditTime: 2024-06-14 11:09:56
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\composables\use-locale\index.ts
 */

import type { Language } from '@vue-maplibre/locale'
import type { MaybeRef } from '@vue-maplibre/utils/types'
import type { Ref } from 'vue'
import Chinese from '@vue-maplibre/locale/lang/zh-cn'
import { get } from 'lodash-unified'
import { computed, isRef, ref, unref } from 'vue'
import { useGlobalConfig } from '../private/use-global-config'

export type TranslatorOption = Record<string, string | number>
export type Translator = (path: string, option?: TranslatorOption) => string
export interface LocaleContext {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export function buildTranslator(locale: MaybeRef<Language>): Translator {
  return (path, option) =>
    translate(path, option, unref(locale))
}

export function translate(path: string, option: undefined | TranslatorOption, locale: Language): string {
  return (get(locale, path, path) as string).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`)
}

export function buildLocaleContext(locale: MaybeRef<Language>): LocaleContext {
  const lang = computed(() => unref(locale).name)
  const localeRef = isRef(locale) ? locale : ref(locale)
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  }
}

export function useLocale() {
  const locale = useGlobalConfig('locale')
  return buildLocaleContext(computed(() => locale.value || Chinese))
}
