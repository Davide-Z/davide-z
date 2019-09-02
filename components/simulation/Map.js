/* eslint no-unused-vars: ["error", { "varsIgnorePattern": ".*" }] */
/* eslint no-console: 0 */
import * as BABYLON from 'babylonjs'

const Map = function(height, width, depth, scene) {
  this.scene = scene

  const adjacentIndexes = function(i, j) {
    const indexes = []
    indexes.push({ i: i - 1, j: j })
    for (let m = i; m < i + 2; m++) {
      for (let n = j - 1; n < j + 2; n++) {
        indexes.push({ i: m, j: n })
      }
    }
    return indexes
  }

  const createWater = function(lakeRadius = 4) {
    const grid = []
    let row
    for (let i = 0; i < depth; i++) {
      row = []
      for (let j = 0; j < width; j++) {
        row.push((i > 0) * (j > 0) * (i < depth - 1) * (j < width - 1))
      }
      grid.push(row)
    }

    const nLake = Math.round(
      (0.5 * width * depth) / (Math.PI * lakeRadius ** 2)
    )

    const lakeCenters = []
    for (let n = 0; n < nLake; n++) {
      lakeCenters.push({
        i: Math.floor(depth * Math.random()),
        j: Math.floor(width * Math.random())
      })
    }
    let m, n
    for (let i = -lakeRadius; i < lakeRadius + 1; i++) {
      for (let j = -lakeRadius; j < lakeRadius + 1; j++) {
        if (i * i + j * j <= lakeRadius * lakeRadius) {
          for (let k = 0; k < lakeCenters.length; k++) {
            m = Math.max(0, Math.min(depth - 1, lakeCenters[k].i + i))
            n = Math.max(0, Math.min(width - 1, lakeCenters[k].j + j))
            grid[m][n] = 0
          }
        }
      }
    }

    return grid
  }

  const createGrassGrowth = function(grid) {
    let row
    for (let i = 0; i < depth; i++) {
      row = []
      for (let j = 0; j < width; j++) {
        grid[i][j] *= Math.random()
      }
    }

    const gridCopy = grid.map(row => row.slice())
    let sum, n
    for (let i = 0; i < depth; i++) {
      for (let j = 0; j < width; j++) {
        if (grid[i][j] !== 0) {
          sum = 0
          n = 0
          const indexes = adjacentIndexes(i, j)
          for (let k = 0; k < indexes.length; k++) {
            sum += gridCopy[indexes[k].i][indexes[k].j]
            n += gridCopy[indexes[k].i][indexes[k].j] !== 0
          }
          grid[i][j] = sum / n
        }
      }
    }
    return grid
  }

  this.ground = createWater(3)
  this.ground = createGrassGrowth(this.ground)
  console.log(this.ground)
}

export default Map
