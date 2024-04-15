/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-12-06 17:59:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-15 14:59:29
 * @FilePath: \vue-maplibre\demo\src\api\modules\mock-menus\index.ts
 */
import { v4 as uuidv4 } from 'uuid'
import { Menu } from '@src/types'

import layersMenu from './layers'
import mapMenu from './map'
import homeMenu from './home'

const menus: Array<Menu> = [
  {
    id: uuidv4(),
    component: 'MainLayout',
    icon: 'cog',
    locked: false,
    hidden: false,
    name: 'layout',
    path: '/',
    permission: '',
    sort: 1000,
    title: '主要布局',
    type: 10,
    redirect: '/home',
    children: [homeMenu, mapMenu, layersMenu]
  }
]

export default menus
