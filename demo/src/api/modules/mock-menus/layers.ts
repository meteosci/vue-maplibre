/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 15:58:40
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-15 15:01:59
 * @FilePath: \vue-maplibre\demo\src\api\modules\mock-menus\layers.ts
 */
import { Menu } from '@src/types'
import { v4 as uuidv4 } from 'uuid'

export default {
  id: uuidv4(),
  component: '/layers',
  icon: 'layers',
  hidden: false,
  name: 'layers',
  path: '/layers',
  permission: 'permission-layers',
  sort: 1000,
  caption: '测试图层',
  title: '测试图层',
  type: 10,
  redirect: '/layers/station',
  children: [
    {
      id: uuidv4(),
      component: '/layers/station',
      icon: 'layers',
      hidden: false,
      name: 'layers-station',
      path: '/layers/station',
      permission: 'permission-layers-station',
      sort: 1000,
      caption: '站点图层',
      title: '站点图层',
      type: 10
    }
  ]
} as Menu
