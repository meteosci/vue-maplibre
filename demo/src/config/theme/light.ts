/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 22:04:26
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-03-04 16:38:04
 * @FilePath: \template-project\src\config\theme\light.ts
 */

export const themeLight = {
  /**
   * 主题名称
   */
  themeName: 'light',
  global: {
    themeBGColor: '#ebf1f6',
    themeBGMaskColor: 'rgba(0, 0, 0, 0)',
    themeColor: '#2c47ab',
    themeColorAlpha: 'rgba(255, 255, 255, 0.6)',
    themeColorActive: '#fff',
    themeScrollTopBackgroundColor: 'rgba(0, 0, 0, 0)',
    themeQInputColor: '#666',
    themeQInputBorderColor: '#E5E5E5',
    themeQCheckboxTruthyColor: '#1976d2',
    themeQMenuColor: '#333',
    themeQMenuBackgroundColor: '#FFFFFF',
    themeQCardColor: '#666',
    // themeQCardHeaderBackgroundColor: 'rgba(0, 101, 122, 0.5)',
    themeQCardHeaderBackgroundColor: 'rgba(28, 130, 159, 0.8)',
    themeQCardBackgroundColor: '#fff',
    themeQScrollAreaColor: 'rgba(0, 68, 82, 0.6)',
    themeQBtnSubmitColor: '#fff',
    themeQBtnSubmitBackgroundColor: '#2c47ab',
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
    themeHeaderColor: '#cbe1e5',
    /**
     * 头部标题颜色
     */
    themeHeaderTitleColor: '#fff',
    /**
     * 标题 logo 背景颜色
     */
    themeHeaderLogoBackgroundColor: 'rgba(255, 255, 255, 0)',
    /**
     * 标题第一层背景颜色
     */
    themeHeaderBackgroundColor: 'rgba(29, 29, 29, 0)',
    /**
     * 标题第二层(内容区域)背景颜色
     */
    // themeHeaderContentBackgroundColor: '#2c47ab'
    themeHeaderContentBackgroundColor: 'linear-gradient(25deg, #00023e, #15416d, #1c829f, #01c8d4)'
  },
  commonPanel: {
    /**
     * common-panel 面板 header 颜色
     */
    themeCommonPanelHeaderColor: '#333333',
    /**
     * common-panel 面板 header 背景颜色
     */
    themeCommonPanelHeaderBackgroundColor: '#fff',
    /**
     * common-panel 面板 content 颜色
     */
    themeCommonPanelContentColor: '#666',
    /**
     * common-panel 面板 content 背景颜色
     */
    themeCommonPanelContentBackgroundColor: '#fff',
    /**
     * common-panel 面板中 q-list 颜色
     */
    themeCommonPanelListColor: '#fff',
    /**
     * common-panel 面板中 q-list 分割线、border 颜色
     */
    themeCommonPanelListBorderColor: '#E5E5E5',

    themeCommonPanelBarBackgroundColor: '#7be1ff'
  },
  navigation: {
    themeVcCompassOuterIcon: 'svguse:#vc-icons-compass-outer',
    themeVcCompassOuterColor: 'rgba(0, 68, 82)',
    themeVcCompassInnerIcon: 'fa fa-compass',
    themeVcCompassInnerColor: 'rgba(255, 255, 255, 0.7)',
    themeVcCompassInnerBackgroundColor: 'rgba(0, 68, 82, 0.6)',
    themeVcZoomControlBackgroundColor: 'rgba(0, 68, 82, 0.6)',
    themeVcPrintBackgroundColor: 'rgba(0, 68, 82, 0.6)',
    themeVcStatusBarBackgroundColor: 'rgba(0, 68, 82, 0.8)',
    themeVcDistanceLegendBackgroundColor: 'rgba(0, 68, 82, 0.8)'
  },
  pageLogin: {
    themePageLoginColor: '#fff',
    themePageLoginBackground: 'rgba(29,29,29, 0.5)'
  },
  menu: {
    themeMenuColor: '#666666',
    themeMenuActiveColor: '#ffffff',
    themeMenuActiveBackgroundColor: '#1976D2'
  },
  vexGrid: {
    themeVexLoadingChunkColor: '#5a7bc7',
    themeVexTableHeaderColor: '#333333',
    themeVexTableHeaderBackgroundColor: '#F7F8FA',
    themeVexTableBodyHoverColor: '#e6e6e6',
    themeVxeTableBodyColor: '#666',
    themeVexTablePageColor: '#666',
    themeVexTablePageBackgroundColor: 'transparent',
    themeVexToolBarBackgroundColor: '#F7F8FA'
  },
  mapPanel: {
    themeMapToolBtnBackcgroundColor: '#fff',
    themeMapToolBtnTextColor: '#666666'
  }
}
