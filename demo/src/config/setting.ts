/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-27 13:18:50
 * @LastEditTime: 2024-03-04 16:22:45
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \template-project\src\config\setting.ts
 */
export default {
  // 注册的主题
  theme: {
    list: [
      {
        title: '浅色',
        name: 'light',
        preview: 'images/theme/light/preview@2x.png'
      },
      {
        title: '深色',
        name: 'dark',
        preview: 'images/theme/dark/preview@2x.png'
      }
    ]
  },
  // 侧边栏默认配置
  menu: {
    asideCollapse: false,
    asideTransition: true
  },
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 是否默认开启页面切换动画
  transition: {
    active: true
  }
}
