/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-04-11 21:11:43
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-08 20:16:57
 * @FilePath: \vue-maplibre\docs\.vitepress\config.mts
 */
import consola from 'consola'
import { REPO_BRANCH, REPO_PATH, docsDirName} from '@vue-maplibre/build'
import { languages } from './utils/lang'
import { features, head, mdPlugin, nav, sidebars } from './config'
import type { UserConfig } from 'vitepress'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`)

const locales = {}
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

export const config: UserConfig = {
  title: 'Vue Maplibre',
  description: 'A Vue 3 Component Library for maplibre-gl',
  lastUpdated: true,
  head,
  themeConfig: {
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docsDirName,

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    logo: '/images/vue-maplibre-logo.svg',
    logoSmall: '/images/vue-maplibre-logo-mini.svg',
    sidebars,
    nav,
    agolia: {
      apiKey: '99caf32e743ba77d78b095b763b8e380',
      appId: 'ZM3TI8AKL4',
    },
    features,
    langs: languages,
  },

  locales,

  markdown: {
    config: (md) => mdPlugin(md),
  },

  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      },
    },
  },
}
export default config
