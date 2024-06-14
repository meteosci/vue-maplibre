/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-05 22:38:11
 * @LastEditTime: 2021-12-06 18:04:11
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\indices.ts
 */
'use strict'

import fs from 'fs'
import algoliasearch from 'algoliasearch'
import { slugify } from 'transliteration'
import fg from 'fast-glob'
const algoliaKey = process.env.ALGOLIA_KEY

interface Index {
  component: string
  title: string
  anchor: string
  content: string
  sort: number
  path: string
}

const client = algoliasearch('0R3ZAIXMAH', algoliaKey)
const langs = {
  'zh-CN': 'vue-cesium-zh',
  'en-US': 'vue-cesium-en'
}

;['zh-CN', 'en-US'].forEach(lang => {
  const indexName = langs[lang]
  const index = client.initIndex(indexName)
  index.clearObjects().then(() => {
    const files = fg.sync(`website/docs/${lang}/**/*.md`)
    let indices = []
    files.forEach(file => {
      const regExp = new RegExp(`website\/docs\/${lang}\/(.*).md`)
      const pathContent = file.match(regExp)!
      const path = pathContent[1]
      const index = path.lastIndexOf('/')
      const names = index !== -1 ? path.split('/') : []
      const component = names.length ? names[names.length - 1] : path
      const content = fs.readFileSync(file, 'utf8')!
      const matches = content
        .replace(/:::[\s\S]*?:::/g, '')
        .replace(/```[\s\S]*?```/g, '')
        .match(/#{2,4}[^#]*/g)
        .map(match =>
          match
            .replace(/\n+/g, '\n')
            .split('\n')
            .filter(part => !!part)
        )
        .map(match => {
          const length = match.length
          if (length > 2) {
            const desc = match.slice(1, length).join('')
            return [match[0], desc]
          }
          return match
        })
      let i = 0
      indices = indices.concat(
        matches.map(match => {
          const title = match[0].replace(/#{2,4}/, '').trim()
          const index = { component, title } as Index
          index.anchor = slugify(title)
          index.content = (match[1] || title).replace(/<[^>]+>/g, '')
          index.path = path
          index.sort = i++
          return index
        })
      )
    })

    index.saveObjects(indices, {
      autoGenerateObjectIDIfNotExist: true
    })
  })
})
