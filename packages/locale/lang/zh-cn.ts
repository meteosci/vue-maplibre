/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-10 17:51:19
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-14 21:56:43
 * @FilePath: \vue-maplibre\packages\locale\lang\zh-cn.ts
 */
import type { Language } from '..'

export default {
  name: 'zh-cn',
  nativeName: '中文(简体)',
  vm: {
    loadError: '加载失败，必须作为 VmMap 的子组件加载。',
    mapLocale: {
      'AttributionControl.ToggleAttribution': '切换属性',
      'AttributionControl.MapFeedback': '反馈',
      'FullscreenControl.Enter': '全屏',
      'FullscreenControl.Exit': '退出全屏',
      'GeolocateControl.FindMyLocation': '定位',
      'GeolocateControl.LocationNotAvailable': '定位不可用',
      'LogoControl.Title': 'MapLibre logo',
      'Map.Title': '地图',
      'Marker.Title': '地图标记',
      'NavigationControl.ResetBearing': '重置为北向',
      'NavigationControl.ZoomIn': '放大',
      'NavigationControl.ZoomOut': '缩小',
      'Popup.Close': '关闭',
      'ScaleControl.Feet': '英尺',
      'ScaleControl.Meters': '米',
      'ScaleControl.Kilometers': '千米',
      'ScaleControl.Miles': '英里',
      'ScaleControl.NauticalMiles': '海里',
      'TerrainControl.Enable': '启用地形',
      'TerrainControl.Disable': '禁用地形',
      'CooperativeGesturesHandler.WindowsHelpText': '使用 Ctrl + 滚轮缩放地图',
      'CooperativeGesturesHandler.MacHelpText': '使用 ⌘ + 滚轮缩放地图',
      'CooperativeGesturesHandler.MobileHelpText': '使用两个手指移动地图'
    },
    notify: {
      log: '【成功】',
      warn: '【警告】',
      error: '【错误】',
      debug: '【调试】',
      info: '【提示】'
    }
  }
} as Language
