/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2024-06-14 00:04:52
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\locale\index.ts
 */
import defaultLang from './lang/zh-cn'

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

export type Language = {
  name: string
  nativeName: string
  vm: TranslatePair
}

let lang: Language = defaultLang as Language

function template(str: string, option) {
  if (!str || !option) return str

  return str.replace(/\{(\w+)\}/g, (match, key) => {
    return option[key]
  })
}

const defaultTranslator = (...args: any[]) => {
  const [path, option] = args
  let value
  const array = path.split('.')
  let current = lang
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property]
    if (i === j - 1) return template(value, option)
    if (!value) return ''
    current = value
  }
  return template(value, option)
}

export const t = (...args: any[]): string => {
  return defaultTranslator(...args)
}

export const use = (l: Language): void => {
  lang = l || lang
  if (lang.name) {
    // dayjs.locale(lang.name)
  }
}

export const setLocale = use
