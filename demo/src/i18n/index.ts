import { getLocalStorage } from '@utils/web-storage'
import { createI18n } from 'vue-i18n'
import enUS from './en-US'
import zhCN from './zh-CN'

export const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
}
const locale = getLocalStorage('locale')

export const i18n = createI18n({
  legacy: false,
  locale: locale as string,
  fallbackLocale: 'zh-CN',
  globalInjection: true,
  messages
})
