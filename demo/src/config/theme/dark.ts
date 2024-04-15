/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-05-29 20:37:07
 * @LastEditTime: 2024-03-04 16:42:22
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \template-project\src\config\theme\dark.ts
 */
export const themeDark = {
  /**
   * 主题名称
   */
  themeName: 'dark',
  global: {
    themeBGColor: '#314255',
    themeBGMaskColor: 'rgba(0, 0, 0, 0)',
    themeColor: '#bfcbd9',
    themeColorAlpha: 'rgba(70, 160, 252, 0.6)',
    themeColorActive: '#46a0fc',
    themeScrollTopBackgroundColor: 'rgba(0, 0, 0, 0)',
    themeQInputColor: '#bfcbd9',
    themeQInputBorderColor: '#fff9',
    themeQCheckboxTruthyColor: '#46a0fc',
    themeQMenuColor: '#bfcbd9',
    themeQMenuBackgroundColor: 'rgba(29, 29, 29, 0.6)',
    themeQCardColor: '#bfcbd9',
    themeQCardHeaderBackgroundColor: 'rgba(49, 66, 85, 0.5)',
    themeQCardBackgroundColor: 'rgba(29, 29, 29, 0.6)',
    themeQScrollAreaColor: '#46a0fc',
    themeQBtnSubmitColor: '#fff',
    themeQBtnSubmitBackgroundColor: '#23D2E7',
    themeQBtnCancelColor: '#999999',
    themeQBtnCancelBackgroundColor: '#E6E6E6',
    themeQBtnNormalColor: '#fff',
    themeQBtnNormalBackgroundColor: '#2c47ab'
  },
  // 头部
  header: {
    /**
     * 头部主要文字颜色
     */
    themeHeaderColor: '#bfcbd9',
    /**
     * 头部标题颜色
     */
    themeHeaderTitleColor: '#bfcbd9',
    /**
     * 标题 logo 背景颜色
     */
    themeHeaderLogoBackgroundColor: '#314255',
    /**
     * 标题第一层背景颜色
     */
    themeHeaderBackgroundColor: '#202d3d',
    /**
     * 标题第二层(内容区域)背景颜色
     */
    // themeHeaderContentBackgroundColor: '#314255'
    themeHeaderContentBackgroundColor: 'linear-gradient(25deg, #000000, #333333, #666666, #999999)'
  },
  commonPanel: {
    /**
     * common-panel 面板 header 颜色
     */
    themeCommonPanelHeaderColor: '#bfcbd9',
    /**
     * common-panel 面板 header 背景颜色
     */
    themeCommonPanelHeaderBackgroundColor: 'rgba(49, 66, 85, 0.8)',
    /**
     * common-panel 面板 content 颜色
     */
    themeCommonPanelContentColor: '#bfcbd9',
    /**
     * common-panel 面板 content 背景颜色
     */
    themeCommonPanelContentBackgroundColor: 'rgba(32, 45, 61, 0.6)',
    /**
     * common-panel 面板中 q-list 颜色
     */
    themeCommonPanelListColor: '#bfcbd9',
    /**
     * common-panel 面板中 q-list 分割线、border 颜色
     */
    themeCommonPanelListBorderColor: 'rgba(255, 255, 255, 0.278)'
  },
  navigation: {
    themeVcCompassOuterIcon: 'fa fa-circle-o-notch',
    themeVcCompassOuterColor: 'rgb(49, 66, 85)',
    themeVcCompassInnerIcon: 'fa fa-circle',
    themeVcCompassInnerColor: 'rgba(49, 66, 85, 0.7)',
    themeVcCompassInnerBackgroundColor: 'rgba(49, 66, 85, 0.6)',
    themeVcZoomControlBackgroundColor: 'rgba(49, 66, 85, 0.6)',
    themeVcPrintBackgroundColor: 'rgba(49, 66, 85, 0.6)',
    themeVcStatusBarBackgroundColor: 'rgba(49, 66, 85, 0.8)',
    themeVcDistanceLegendBackgroundColor: 'rgba(49, 66, 85, 0.8)'
  },
  pageLogin: {
    themePageLoginColor: '#bfcbd9',
    themePageLoginBackground: 'rgba(32, 45, 61, 0.5)'
  },
  menu: {
    themeMenuColor: '#bfcbd9',
    themeMenuActiveColor: '#fff',
    themeMenuActiveBackgroundColor: '#F2C037'
  },
  vexGrid: {
    themeVexLoadingChunkColor: '#5a7bc7',
    themeVexTableHeaderColor: '#666',
    themeVexTableHeaderBackgroundColor: '#e6e6e6',
    themeVexTableBodyHoverColor: '#5a7bc7',
    themeVxeTableBodyColor: '#666',
    themeVexTablePageColor: '#666',
    themeVexTablePageBackgroundColor: 'transparent',
    themeVexToolBarBackgroundColor: '#F7F8FA'
  }
}
