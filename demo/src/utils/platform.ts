/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-08 18:37:31
 * @LastEditTime: 2023-12-14 16:14:21
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \cloudtao_2023_dps_h5_src\src\utils\platform.ts
 */

// eslint-disable-next-line no-restricted-syntax
export const enum EPlatformType {
  /**
   * 专有钉钉小程序
   */
  zydd_xcx = 'zydd_xcx',
  /**
   * 支付宝小程序
   */
  zfb_xcx = 'zfb_xcx',
  /**
   * qq 小程序
   */
  qq_xcx = 'qq_xcx',
  /**
   * 微信小程序
   */
  wx_xcx = 'wx_xcx',
  /**
   * 头条小程序
   */
  tt_xcx = 'tt_xcx',
  /**
   * 百度小程序
   */
  bd_xcx = 'bd_xcx',
  /**
   * 快手小程序
   */
  qk_xcx = 'qk_xcx',
  /**
   * 其他，一般是在浏览器中
   */
  unkown = 'unkown'
}

/**
 * 获取当前运行程序平台。
 * @returns {*} 平台信息
 */
export function getPlatformInfo() {
  const userAgent = navigator.userAgent
  if (userAgent.includes('AlipayClient') || userAgent.includes('mPaaSClient')) {
    // 支付宝小程序的 JS-SDK 防止 404 需要动态加载，如果不需要兼容支付宝小程序，则无需引用此 JS 文件。
    if (userAgent.includes('mPaaSClient')) {
      // 专有钉钉
      return EPlatformType.zydd_xcx
    }
    else {
      return EPlatformType.zfb_xcx
    }
  }
  else if (/QQ/i.test(userAgent) && /miniProgram/i.test(userAgent)) {
    // QQ 小程序
    return EPlatformType.qq_xcx
  }
  else if (/micromessenger/i.test(userAgent)) {
    // 微信小程序/微信浏览器 JS-SDK 如果不需要兼容微信小程序，则无需引用此 JS 文件。
    return EPlatformType.wx_xcx
  }
  else if (/toutiaomicroapp/i.test(userAgent)) {
    // 头条小程序 JS-SDK 如果不需要兼容头条小程序，则无需引用此 JS 文件。--不支持web-view postmessage通信
    return EPlatformType.tt_xcx
  }
  else if (/swan/i.test(userAgent)) {
    // 百度小程序 JS-SDK 如果不需要兼容百度小程序，则无需引用此 JS 文件。
    return EPlatformType.bd_xcx
  }
  else if (/quickapp/i.test(userAgent)) {
    // quickapp
    return EPlatformType.qk_xcx
  }
  else {
    // 其他浏览器
    return EPlatformType.unkown
  }
}
