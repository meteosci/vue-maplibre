/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-07 15:49:08
 * @LastEditTime: 2024-04-16 22:52:14
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\composables\use-locale\index.ts
 */
import { computed, isRef, ref, unref } from 'vue'
import Chinese from '@vue-maplibre/locale/lang/zh-hans'
import { get } from 'lodash-unified'
import type { Ref } from 'vue'
import type { Language } from '@vue-maplibre/locale'
import { useGlobalConfig } from '../private/use-global-config'
import { MaybeRef } from '@vue-maplibre/utils/types'

export type TranslatorOption = Record<string, string | number>
export type Translator = (path: string, option?: TranslatorOption) => string
export type LocaleContext = {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
  (path, option) =>
    translate(path, option, unref(locale))

export const translate = (path: string, option: undefined | TranslatorOption, locale: Language): string =>
  (get(locale, path, path) as string).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`)

export const buildLocaleContext = (locale: MaybeRef<Language>): LocaleContext => {
  const lang = computed(() => unref(locale).name)
  const localeRef = isRef(locale) ? locale : ref(locale)
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  }
}

export const useLocale = () => {
  const locale = useGlobalConfig('locale')
  return buildLocaleContext(computed(() => locale.value || Chinese))
}
