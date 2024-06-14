/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2024-06-14 21:12:58
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\packages\components\config-provider\src\index.ts
 */
import { defineComponent, PropType, renderSlot, VNode } from 'vue'
import { provideGlobalConfig } from '@vue-maplibre/composables/use-global-config'
import { Language } from '@vue-maplibre/locale'
import Chinese from '@vue-maplibre/locale/lang/zh-cn'

export default defineComponent({
  name: 'VmConfigProvider',
  props: {
    locale: {
      type: Object as PropType<Language>,
      default: () => Chinese
    },
    reloadMode: {
      type: String as PropType<'once' | 'all'>,
      default: 'all'
    }
  },

  setup(props, { slots }) {
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  }
})

export type VmConfigProviderProps = {
  /**
   * Locale Object.
   */
  locale?: Language
  /**
   * If multiple component properties are changed at once. 'all' means reload them in sequence; 'once' means reload only once after the last property has been changed.
   */
  reloadMode?: 'once' | 'all'
}

export interface VmConfigProviderSlots {
  /**
   * This is where vm-map may go into
   */
  default: () => VNode[]
}
