/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 23:56:56
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-01-09 23:57:25
 * @FilePath: \vue-maplibre\lint-staged.config.js
 */
// lint-staged.config.js
module.exports = {
  '*.{js,jsx}': ['eslint --cache --fix'],
  '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint --cache --fix'],
  '*.vue': [() => 'vue-tsc -p tsconfig.json --noEmit', 'eslint --cache --fix']
}

