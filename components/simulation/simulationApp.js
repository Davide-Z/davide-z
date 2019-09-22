/* eslint no-unused-vars: ["error", { "varsIgnorePattern": ".*" }] */
/* eslint no-console: 0 */
import * as BABYLON from 'babylonjs'
import * as GUI from 'babylonjs-gui'
import Map from './Map'

const SimulationApp = function(canvaId) {
  const canvas = document.getElementById(canvaId) // Get the canvas element
  const engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine

  /** Add the create scene function **/
  const createScene = function() {
    // Create the scene space
    const scene = new BABYLON.Scene(engine)
    scene.clearColor = BABYLON.Color3.FromHexString('#feffe7')

    let isPlay = true
    const width = 60
    const depth = 35
    const height = 1
    const diameter = 1.1
    const homogeneity = 0.1
    const map = new Map(width, depth, height, diameter, homogeneity, scene)
    map.render()

    // Add a camera to the scene and attach it to the canvas
    const camera = new BABYLON.ArcRotateCamera(
      'Camera',
      0,
      Math.PI / 4,
      Math.sqrt(width * depth),
      new BABYLON.Vector3((3 * depth) / 5, 0, (4 * width) / 9),
      scene
    )
    camera.lowerRadiusLimit = 5
    camera.upperBetaLimit = (5 * Math.PI) / 12
    camera.panningAxis = new BABYLON.Vector3(1, 0, 1)
    camera.panningSensibility = 200
    camera.attachControl(canvas, true, false, 0)

    // const ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 0, scene)

    // Add lights to the scene
    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 1, 0),
      scene
    )

    const gui = new GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI')

    const panel = new GUI.StackPanel()
    panel.isVertical = false
    panel.adaptHeightToChildren = true
    panel.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP
    panel.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT
    gui.addControl(panel)

    const playButton = GUI.Button.CreateSimpleButton('play', 'Play')
    playButton.width = '150px'
    playButton.height = '40px'
    playButton.color = 'white'
    playButton.cornerRadius = 20
    playButton.background = 'grey'
    playButton.onPointerUpObservable.add(function() {
      isPlay = true
    })

    const pauseButton = GUI.Button.CreateSimpleButton('pause', 'Pause')
    pauseButton.width = '150px'
    pauseButton.height = '40px'
    pauseButton.color = 'white'
    pauseButton.cornerRadius = 20
    pauseButton.background = 'grey'
    pauseButton.onPointerUpObservable.add(function() {
      isPlay = false
    })

    panel.addControl(playButton)
    panel.addControl(pauseButton)

    scene.registerBeforeRender(function() {
      if (isPlay) {
        map.updateGrass()
      }
    })
    return scene
  }
  /** End of the create scene function **/

  const scene = createScene() // Call the createScene function

  // Register a render loop to repeatedly render the scene
  engine.runRenderLoop(function() {
    scene.render()
  })

  // Watch for browser/canvas resize events
  window.addEventListener('resize', function() {
    engine.resize()
  })
}

export default SimulationApp
