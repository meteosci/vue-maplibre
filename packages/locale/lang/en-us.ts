/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-11-10 17:51:19
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-14 19:55:51
 * @FilePath: \vue-maplibre\packages\locale\lang\en-us.ts
 */
import type { Language } from '..'

export default {
  name: 'en-us',
  nativeName: 'English (US)',
  vm: {
    loadError: 'needs to be child of VmMap',
    mapLocale: {
      'AttributionControl.ToggleAttribution': 'Toggle attribution',
      'AttributionControl.MapFeedback': 'Map feedback',
      'FullscreenControl.Enter': 'Enter fullscreen',
      'FullscreenControl.Exit': 'Exit fullscreen',
      'GeolocateControl.FindMyLocation': 'Find my location',
      'GeolocateControl.LocationNotAvailable': 'Location not available',
      'LogoControl.Title': 'MapLibre logo',
      'Map.Title': 'Map',
      'Marker.Title': 'Map marker',
      'NavigationControl.ResetBearing': 'Reset bearing to north',
      'NavigationControl.ZoomIn': 'Zoom in',
      'NavigationControl.ZoomOut': 'Zoom out',
      'Popup.Close': 'Close popup',
      'ScaleControl.Feet': 'ft',
      'ScaleControl.Meters': 'm',
      'ScaleControl.Kilometers': 'km',
      'ScaleControl.Miles': 'mi',
      'ScaleControl.NauticalMiles': 'nm',
      'TerrainControl.Enable': 'Enable terrain',
      'TerrainControl.Disable': 'Disable terrain',
      'CooperativeGesturesHandler.WindowsHelpText': 'Use Ctrl + scroll to zoom the map',
      'CooperativeGesturesHandler.MacHelpText': 'Use ⌘ + scroll to zoom the map',
      'CooperativeGesturesHandler.MobileHelpText': 'Use two fingers to move the map'
    },
    notify: {
      log: '[Success]',
      warn: '[Warning]',
      error: '[Error]',
      debug: '[Debug]',
      info: '[Info]'
    }
  }
} as Language
