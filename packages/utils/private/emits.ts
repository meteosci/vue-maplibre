import { VmComponentInternalInstance, VmReadyObject } from '../types'

export const commonEmits = {
  beforeLoad: (instance: VmComponentInternalInstance) => true,
  ready: (readyObj: VmReadyObject) => true,
  unready: (e: any) => true,
  destroyed: (instance: VmComponentInternalInstance) => true
}
