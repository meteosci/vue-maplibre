/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-02 10:00:08
 * @LastEditTime: 2024-01-09 15:32:36
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \demo\src\api\index.ts
 */

import { service, request, serviceForMock, requestForMock, mock } from './service'
import * as tools from './tools'

import systemApi from './modules/system'
import commonApi from './modules/common'
const params = { service, request, serviceForMock, requestForMock, mock, tools }

/**
 * 系统、用户、菜单 api
 */
const system = systemApi(params)
const common = commonApi(params)

export { common, system }

export type RequestTools = typeof tools
