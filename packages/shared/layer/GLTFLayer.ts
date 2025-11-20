/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-27 00:21:46
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-28 23:27:22
 * @FilePath: \vue-maplibre\packages\shared\layer\GLTFLayer.ts
 */

import type { GLTFLayerOptions } from '@vue-maplibre/utils/types'
import type { mat4 } from 'gl-matrix'
import type { CustomRenderMethodInput, Map } from 'maplibre-gl'
import { LngLat, MercatorCoordinate } from 'maplibre-gl'
import { Camera, DirectionalLight, Matrix4, Scene, Vector3, WebGLRenderer } from 'three'
import CustomLayer from './CustomLayer'
import { GLTFLoader } from './loaders/GLTFLoader'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default class CustomGLTFLayer extends CustomLayer {
  camera: Camera
  scene: Scene
  position: [number, number, number]
  /**
   * transformation parameters to position, rotate and scale the 3D model onto the map
   */
  modelTransform: {
    translateX: number
    translateY: number
    translateZ: number
    rotateX: number
    rotateY: number
    rotateZ: number
    /**
     * Since our 3D model is in real world meters, a scale transform needs to be applied since the CustomLayerInterface expects units in MercatorCoordinates.
     */
    scale: number
  }

  declare options: GLTFLayerOptions

  static defaultOptions: GLTFLayerOptions = {
    url: 'https://maplibre.org/maplibre-gl-js/docs/assets/34M_17/34M_17.gltf',
    position: [148.9819, -35.39847, 0],
    rotate: [Math.PI / 2, 0, 0],
    scale: 1
  }

  renderer: WebGLRenderer

  constructor(options: GLTFLayerOptions) {
    super(options)
    this.renderingMode = '3d'
    this.camera = new Camera()
    this.scene = new Scene()
    this.renderer = null
  }

  onChangeOptions(options: GLTFLayerOptions): void {
    super.onChangeOptions(options)

    const { position, rotate, scale } = this.options

    const [lng, lat] = position
    let altitude = position?.[2] || 0

    if (options.clampToGround) {
      const modelLocation = new LngLat(lng, lat)
      altitude = this.map.queryTerrainElevation(modelLocation) || altitude
    }

    const modelAsMercatorCoordinate = MercatorCoordinate.fromLngLat([lng, lat], altitude)

    this.modelTransform = {
      translateX: modelAsMercatorCoordinate.x,
      translateY: modelAsMercatorCoordinate.y,
      translateZ: modelAsMercatorCoordinate.z,
      rotateX: rotate[0],
      rotateY: rotate[1],
      rotateZ: rotate[2],
      scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits() * scale
    }
  }

  onAdd(map: Map, gl: WebGLRenderingContext): void {
    super.onAdd(map, gl)

    this.onChangeOptions(this.options)

    // create two three.js lights to illuminate the model
    const directionalLight = new DirectionalLight(0xFFFFFF)
    directionalLight.position.set(0, -70, 100).normalize()
    this.scene.add(directionalLight)

    const directionalLight2 = new DirectionalLight(0xFFFFFF)
    directionalLight2.position.set(0, 70, 100).normalize()
    this.scene.add(directionalLight2)

    const { url } = this.options
    // use the three.js GLTF loader to add the 3D model to the three.js scene
    const loader = new GLTFLoader()
    // eslint-disable-next-line ts/no-this-alias
    const that = this
    loader.load(url, (gltf) => {
      that.scene.add(gltf.scene)
      this.fire('loaded', {
        gltf,
        scene: that.scene
      })
    })

    // use the MapLibre GL JS map canvas for three.js
    this.renderer = new WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true
    })

    this.renderer.autoClear = false
  }

  render(gl, options: CustomRenderMethodInput) {
    // 兼容 5.0.0 版本前的写法
    const matrix = (Array.isArray(options) ? options : options.defaultProjectionData.mainMatrix) as mat4
    const rotationX = new Matrix4().makeRotationAxis(new Vector3(1, 0, 0), this.modelTransform.rotateX)
    const rotationY = new Matrix4().makeRotationAxis(new Vector3(0, 1, 0), this.modelTransform.rotateY)
    const rotationZ = new Matrix4().makeRotationAxis(new Vector3(0, 0, 1), this.modelTransform.rotateZ)
    const m = new Matrix4().fromArray(matrix)
    const l = new Matrix4()
      .makeTranslation(this.modelTransform.translateX, this.modelTransform.translateY, this.modelTransform.translateZ)
      .scale(new Vector3(this.modelTransform.scale, -this.modelTransform.scale, this.modelTransform.scale))
      .multiply(rotationX)
      .multiply(rotationY)
      .multiply(rotationZ)
    this.camera.projectionMatrix = m.multiply(l)
    this.renderer.resetState()
    this.renderer.render(this.scene, this.camera)

    this.map.triggerRepaint()
  }

  dispose() {
    super.dispose()
    this.renderer.dispose()
  }
}

/*
 * Helper function used to get threejs-scene-coordinates from mercator coordinates.
 * This is just a quick and dirty solution - it won't work if points are far away from each other
 * because a meter near the north-pole covers more mercator-units
 * than a meter near the equator.
 */
function calculateDistanceMercatorToMeters(from, to) {
  const mercatorPerMeter = from.meterInMercatorCoordinateUnits()
  // mercator x: 0=west, 1=east
  const dEast = to.x - from.x
  const dEastMeter = dEast / mercatorPerMeter
  // mercator y: 0=north, 1=south
  const dNorth = from.y - to.y
  const dNorthMeter = dNorth / mercatorPerMeter
  return { dEastMeter, dNorthMeter }
}
