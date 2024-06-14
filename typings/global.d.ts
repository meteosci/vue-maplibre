/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 15:12:31
 * @LastEditTime: 2024-04-25 22:03:33
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\typings\global.d.ts
 */

import {
  ComponentOptions,
  ComponentPublicInstance,
  ComputedOptions,
  MethodOptions,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps
} from 'vue'

import { VmConfigProviderProps, VmConfigProviderSlots, VmMapProps, VmMapSlots, VmLayerGltfProps, VmLayerNativeProps, VmControlNavigationProps, VmControlTerrainProps } from '@meteosci/vue-maplibre'

export type StringDictionary<T extends string> = Required<{ [index in T]: string }>

// Needed to prevent TS to collapse `'value1' | 'value2' | string` to `string`, which breaks first parameter autocomplete
// See: https://github.com/microsoft/TypeScript/issues/29729#issuecomment-832522611
export type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>)

// See: https://stackoverflow.com/a/49936686/7931540
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : DeepPartial<T[P]>
}

// Create a fake constructor signature for a Vue component, needed to correctly extract/infer Component type in many situation,
// especially into VTU to automatically infer Quasar components type when using `findComponent`
// This type is compatible with the Vue private `ComponentPublicInstanceConstructor` type
// https://github.com/vuejs/vue-next/blob/011dee8644bb52f5bdc6365c6e8404936d57e2cd/packages/runtime-core/src/componentPublicInstance.ts#L111
export type ComponentConstructor<
  Component extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>,
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = { new (): Component } & ComponentOptions<Props, RawBindings, D, C, M>

// https://github.com/vuejs/vue-next/blob/d84d5ecdbdf709570122175d6565bb61fae877f2/packages/runtime-core/src/apiDefineComponent.ts#L29-L31
// TODO: This can be imported from vue directly once this PR gets merged: https://github.com/vuejs/vue-next/pull/2403
export type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps

type EmptyObject = {
  [K in never]: never
}

// Can't use `DefineComponent` because of the false prop inferring behavior, it doesn't pick up the required types when an interface is passed
// This PR will probably solve the problem as it moves the prop inferring behavior to `defineComponent` function: https://github.com/vuejs/vue-next/pull/4465
// GlobalComponentConstructor helper is kind of like the ComponentConstructor type helper, but simpler and keeps the Volar errors simpler,
// and also similar to the usage in official Vue packages: https://github.com/vuejs/vue-next/blob/d84d5ecdbdf709570122175d6565bb61fae877f2/packages/runtime-core/src/components/BaseTransition.ts#L258-L264 or https://github.com/vuejs/vue-router-next/blob/5dd5f47515186ce34efb9118dda5aad0bb773439/src/RouterView.ts#L160-L172 etc.
// TODO: This can be replaced with `DefineComponent` once this PR gets merged: https://github.com/vuejs/vue-next/pull/4465
export type GlobalComponentConstructor<Props = EmptyObject, Slots = EmptyObject> = {
  new (): {
    $props: PublicProps & Props
    $slots: Slots
  }
}

// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    VmConfigProvider: GlobalComponentConstructor<VmConfigProviderProps, VmConfigProviderSlots>

    VmMap: GlobalComponentConstructor<VmMapProps, VmMapSlots>

    VmLayerGltf: GlobalComponentConstructor<VmLayerGltfProps>
    VmLayerNative: GlobalComponentConstructor<VmLayerNativeProps>

    VmControlNavigation: GlobalComponentConstructor<VmControlNavigationProps>
    VmControlTerrain: GlobalComponentConstructor<VmControlTerrainProps>
  }
}

export {}
