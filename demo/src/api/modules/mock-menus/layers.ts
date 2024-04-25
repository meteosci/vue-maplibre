/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 15:58:40
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-26 00:33:40
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
  redirect: '/layers/native',
  children: [
    {
      id: uuidv4(),
      component: '/layers/native',
      icon: 'layers',
      hidden: false,
      name: 'layers-native',
      path: '/layers/native',
      permission: 'permission-layers-native',
      sort: 1000,
      caption: '图层组件',
      title: '图层组件',
      type: 10
    }
  ]
} as Menu
