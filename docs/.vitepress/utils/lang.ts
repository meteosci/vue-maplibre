/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-08 19:56:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-12 21:47:09
 * @FilePath: \vue-maplibre\docs\.vitepress\utils\lang.ts
 */
import fs from 'fs'
import path from 'path'
import { docRoot } from '@vue-maplibre/build'

export const languages = ['en-US', 'zh-CN']

export const ensureLang = (lang: string) => `/${lang}`

export const getLang = (id: string) =>
  path.relative(docRoot, id).split(path.sep)[0]
