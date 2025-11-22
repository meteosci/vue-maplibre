export interface Sponsor {
  url: string
  name_cn?: string
  name: string
  slogan_cn?: string
  slogan: string
  img: string
  isDark?: boolean
  imgL?: string
  slogan_index?: string
  banner_img?: string
  className?: string
}

export const rightRichTextSponsors: Sponsor[] = []

export const rightBigLogoSponsors: Sponsor[] = [
  {
    name: 'Vue for Cesium',
    img: '/images/sponsors/vue-cesium-logo.svg',
    imgL: '/images/sponsors/vue-cesium-logo.svg',
    url: 'https://zouyaoji.top/vue-cesium/',
    slogan: 'A Vue3 based component library of MaplibreGL for developers.',
    slogan_cn: '基于 Vue 3，面向开发者的 Maplibre GL 组件库。',
    slogan_index: 'Vue for Cesium'
  }
]

export const rightLogoSmallSponsors: Sponsor[] = [
  // {
  //   name: 'Vue for Cesium',
  //   img: '/images/sponsors/vue-cesium-logo.svg',
  //   imgL: '/images/sponsors/vue-cesium-logo.svg',
  //   url: 'https://zouyaoji.top/vue-cesium/',
  //   slogan: 'A Vue3 based component library of MaplibreGL for developers.',
  //   slogan_cn: '基于 Vue 3，面向开发者的 MaplibreGL 组件库。'
  // }
]

export const leftCustomImgSponsors: Sponsor[] = [
  {
    name: 'Vue for Cesium',
    img: '/images/sponsors/vue-cesium-logo.svg',
    imgL: '/images/sponsors/vue-cesium-logo.svg',
    url: 'https://zouyaoji.top/vue-cesium/',
    banner_img: '/images/sponsors/vue-cesium-logo-normal.svg',
    slogan: 'A Vue3 based component library of MaplibreGL for developers.',
    slogan_cn: '基于 Vue 3，面向开发者的 MaplibreGL 组件库。'
  }
]

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightBigLogoSponsors,
  ...rightRichTextSponsors
]

export const leftLogoSponsors: Sponsor[] = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
