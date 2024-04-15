/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-09-12 01:59:09
 * @LastEditTime: 2024-04-15 14:42:45
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\demo\src\config\key.ts
 */
const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'
export const ctKey = hasSymbol ? Symbol('___cloudtao___') : '___cloudtao___'
