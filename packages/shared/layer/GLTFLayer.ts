/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-27 00:21:46
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-04-18 00:26:43
 * @FilePath: \vue-maplibre\packages\shared\layer\GLTFLayer.ts
 */
import { Map } from 'maplibre-gl'
import { MercatorCoordinate } from 'maplibre-gl'
import CustomLayer from './CustomLayer'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Camera, Scene, DirectionalLight, WebGLRenderer, Matrix4, Vector3 } from 'three'
import { GLTFLayerOptions } from '@vue-maplibre/utils/types'

let renderer: WebGLRenderer = null

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

  constructor(options: GLTFLayerOptions) {
    super(options)

    this.camera = new Camera()
    this.scene = new Scene()
  }

  onChangeOptions(options: GLTFLayerOptions): void {
    super.onChangeOptions(options)

    const { position, rotate, scale } = this.options

    const [lng, lat, altitude] = position
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
    const directionalLight = new DirectionalLight(0xffffff)
    directionalLight.position.set(0, -70, 100).normalize()
    this.scene.add(directionalLight)

    const directionalLight2 = new DirectionalLight(0xffffff)
    directionalLight2.position.set(0, 70, 100).normalize()
    this.scene.add(directionalLight2)

    const { url } = this.options
    // use the three.js GLTF loader to add the 3D model to the three.js scene
    const loader = new GLTFLoader()
    loader.load(url, gltf => {
      this.scene.add(gltf.scene)
    })

    // use the MapLibre GL JS map canvas for three.js
    renderer = new WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true
    })

    renderer.autoClear = false
  }

  render(gl, matrix) {
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
    renderer.resetState()
    renderer.render(this.scene, this.camera)

    this.map.triggerRepaint()
  }
}
