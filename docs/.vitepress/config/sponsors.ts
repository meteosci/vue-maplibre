/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-08 19:56:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-13 22:14:38
 * @FilePath: \vue-maplibre\docs\.vitepress\config\sponsors.ts
 */
export const rightRichTextSponsors = []

export const rightBigLogoSponsors = [
  {
    name: '广告位',
    img: '/images/sponsors/figure-2.png',
    imgL: '/images/sponsors/figure-2.png',
    url: 'https://zouyaoji.top/vue-cesium/',
    slogan: 'Waiting for a vacant position',
    slogan_cn: '虚位以待',
    slogan_index: '虚位以待',
  },
]

export const rightLogoSmallSponsors = [
  {
    name: '广告位',
    img: '/images/sponsors/figure-2.png',
    imgL: '/images/sponsors/figure-2.png',
    url: 'https://zouyaoji.top/vue-cesium/',
    slogan: 'Waiting for a vacant position',
    slogan_cn: '虚位以待',
  }
]

export const leftCustomImgSponsors = [
  {
    name: '广告位',
    img: '/images/sponsors/figure-2.png',
    url: 'https://zouyaoji.top/vue-cesium/',
    slogan: 'Waiting for a vacant position',
    slogan_cn: '虚位以待',
    banner_img: '/images/sponsors/figure-2.png',
  }
]

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightBigLogoSponsors,
  ...rightRichTextSponsors,
]

export const leftLogoSponsors = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
