/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 16:03:10
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-01-09 16:05:35
 * @FilePath: \demo\src\api\modules\mock-menus\home.ts
 */
import { Menu } from '@src/types'
import { v4 as uuidv4 } from 'uuid'

export default {
  id: uuidv4(),
  component: '/home',
  icon: 'home',
  hidden: false,
  name: 'home',
  path: '/home',
  permission: 'permission-home',
  sort: 1000,
  caption: '主页',
  title: 'message.header.index',
  type: 10
} as Menu
