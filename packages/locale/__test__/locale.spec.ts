import { describe, expect } from 'vitest'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-13 22:43:29
 * @LastEditTime: 2024-06-14 11:10:02
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\locale\__test__\locale.spec.ts
 */
import { t, use } from '../index'
import en from '../lang/en-us'
import zhCn from '../lang/zh-cn'

describe('locale', () => {
  it('t', () => {
    expect(t('vc.navigation.compass.title')).toBe('按住鼠标拖拽旋转相机。')
  })

  it('return key name if not defined', () => {
    expect(t('vc.navigation.compass.someThing')).toBeUndefined()
  })

  it('use', () => {
    use(en)
    expect(t('vc.navigation.compass.title')).toBe('Click and drag to rotate the camera.')
    use(zhCn)
  })
})
