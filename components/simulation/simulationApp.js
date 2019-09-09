/* eslint no-unused-vars: ["error", { "varsIgnorePattern": ".*" }] */
/* eslint no-console: 0 */
import * as BABYLON from 'babylonjs'
import Map from './Map'

const SimulationApp = function(canvaId) {
  const canvas = document.getElementById(canvaId) // Get the canvas element
  const engine = new BABYLON.Engine(canvas, true) // Generate the BABYLON 3D engine
  let deltaTime = 0
  /** Add the create scene function **/
  const createScene = function() {
    // Create the scene space
    const scene = new BABYLON.Scene(engine)
    scene.clearColor = BABYLON.Color3.FromHexString('#c9feff')

    const width = 60
    const depth = 35
    const height = 1
    const diameter = 1.1
    const homogeneity = 0.2
    scene.map = new Map(width, depth, height, diameter, homogeneity, scene)
    scene.map.render()

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
    console.log(scene.map.grass)
    return scene
  }
  /** End of the create scene function **/

  const scene = createScene() // Call the createScene function

  // Register a render loop to repeatedly render the scene
  engine.runRenderLoop(function() {
    deltaTime += engine.getDeltaTime() / 5000
    if (deltaTime > 1) {
      deltaTime = 0
      scene.map.updateGrass()
      scene.map.render()
    }
    scene.render()
  })

  // Watch for browser/canvas resize events
  window.addEventListener('resize', function() {
    engine.resize()
  })
}

export default SimulationApp
