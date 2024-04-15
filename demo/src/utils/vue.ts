/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-11 22:55:34
 * @LastEditTime: 2023-12-14 16:14:32
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \cloudtao_2023_dps_h5_src\src\utils\vue.ts
 */
import { markRaw } from 'vue'

export const createDirective = raw => markRaw(raw)
