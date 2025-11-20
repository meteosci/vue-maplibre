import type { PropType } from 'vue'

export default {
  /**
   * The url address of the gltf model.
   */
  url: {
    type: String,
    default: 'https://maplibre.org/maplibre-gl-js/docs/assets/34M_17/34M_17.gltf'
  },
  /**
   * The position of the gltf model.
   */
  position: {
    type: Array as unknown as PropType<[number, number] | [number, number, number]>,
    default: [148.9819, -35.39847, 0]
  },
  /**
   * The rotation angle of the gltf model, in radians.
   */
  rotate: {
    type: Array as unknown as PropType<[number, number, number]>,
    default: [Math.PI / 2, 0, 0]
  },
  /**
   * The scale angle of the gltf model.
   */
  scale: {
    type: Number,
    default: 1
  },
  /**
   *  true if we want the gltf clamped to the ground.
   */
  clampToGround: {
    type: Boolean,
    default: false
  }
}
