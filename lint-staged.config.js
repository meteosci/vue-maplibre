/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 23:56:56
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-29 17:33:11
 * @FilePath: \vue-maplibre\lint-staged.config.js
 */
// lint-staged.config.js
export default {
  'packages/**/*.{ts,vue,js,tsx,jsx}': ['eslint --fix'],
  'packages/**/*.{json,md,css,scss,less,html}': ['eslint --fix']
}
