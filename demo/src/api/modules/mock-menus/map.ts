/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 16:03:10
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-15 15:00:01
 * @FilePath: \vue-maplibre\demo\src\api\modules\mock-menus\map.ts
 */
import { Menu } from '@src/types'
import { v4 as uuidv4 } from 'uuid'

export default {
  id: uuidv4(),
  component: '/map',
  icon: 'map',
  hidden: false,
  name: 'map',
  path: '/map',
  permission: 'permission-map',
  sort: 1000,
  caption: '测试地图',
  title: 'message.header.map',
  type: 10
} as Menu
