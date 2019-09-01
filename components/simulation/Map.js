/* eslint no-unused-vars: ["error", { "varsIgnorePattern": ".*" }] */
/* eslint no-console: 0 */
import * as BABYLON from 'babylonjs'

const Map = function(height, width, depth, scene) {
  this.scene = scene

  const createGround = function() {
    const grid = []
    let tile
    for (let i = 0; i < depth; i++) {
      tile = []
      for (let j = 0; j < width; j++) {
        tile.push({ isGround: true, grass: Math.random() })
      }
      grid.push(tile)
    }
    return grid
  }

  const createLakes = function() {
    const lakeRadius = 4
    const nLake = Math.round(
      (0.1 * width * depth) / (Math.PI * lakeRadius ** 2)
    )
  }

  this.grid = createGround()
  console.log(this.grid)
}

export default Map
