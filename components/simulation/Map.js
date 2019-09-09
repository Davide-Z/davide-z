/* eslint no-unused-vars: ["error", { "varsIgnorePattern": ".*" }] */
/* eslint no-console: 0 */
import * as BABYLON from 'babylonjs'
import * as MATH from 'mathjs'

const Map = function(width, depth, height, diameter, homogeneity, scene) {
  this.scene = scene
  let ground
  let grass

  const groundColor = function(rate) {
    const minColor = BABYLON.Color3.FromHexString('#d2a62c')
    const maxColor = BABYLON.Color3.FromHexString('#25d462')
    if (rate === 0) {
      return BABYLON.Color3.FromHexString('#aef4fd')
    } else {
      return BABYLON.Color3.Lerp(minColor, maxColor, rate)
    }
  }

  const adjacentIndexes = function(i, j) {
    const indexes = [
      { i: i - 1 + (j % 2), j: j - 1 },
      { i: i + (j % 2), j: j - 1 },
      { i: i - 1, j: j },
      { i: i + 1, j: j },
      { i: i - 1 + (j % 2), j: j + 1 },
      { i: i + (j % 2), j: j + 1 }
    ]
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

  const createGround = function(grid) {
    let row
    let indexes
    for (let i = 0; i < depth; i++) {
      row = []
      for (let j = 0; j < width; j++) {
        // transformation according to the homogeneity parameter
        grid[i][j] *=
          0.5 +
          Math.atan((Math.random() - 0.5) / homogeneity / homogeneity) / Math.PI
      }
    }

    const gridCopy = grid.map(row => row.slice())
    let sum, n
    for (let i = 0; i < depth; i++) {
      for (let j = 0; j < width; j++) {
        if (grid[i][j] !== 0) {
          sum = grid[i][j]
          n = 1
          indexes = adjacentIndexes(i, j)
          for (let k = 0; k < indexes.length; k++) {
            sum += gridCopy[indexes[k].i][indexes[k].j]
            n += gridCopy[indexes[k].i][indexes[k].j] !== 0
          }
          if (n === 1) {
            // only-child tile removed
            grid[i][j] = 0
          } else {
            grid[i][j] = sum / n
          }
        }
      }
    }
    return grid
  }

  const createGrass = function(grid) {
    let gridCopy = grid.map(row => row.slice())
    gridCopy = gridCopy.map(row => row.map(x => (x > 0 ? x : 0)))
    return gridCopy
  }

  const renderTile = function(i, j) {
    const tileMaterial = new BABYLON.StandardMaterial(
      'tile_material_' + i + '_' + j,
      scene
    )
    tileMaterial.diffuseColor = groundColor(grass[i][j])
    tileMaterial.specularColor = new BABYLON.Color3(0, 0, 0)

    const tile = BABYLON.MeshBuilder.CreateCylinder(
      'tile_' + i + '_' + j,
      {
        height: height,
        diameter: diameter,
        tessellation: 6,
        faceColors: Array(8).fill(groundColor(grass[i][j]))
      },
      scene
    )
    tile.rotation.y = Math.PI / 2
    const x = i + 0.5 * (j % 2)
    const z = 0.87 * j
    tile.position = new BABYLON.Vector3(x, 0, z)
    tile.material = tileMaterial
  }

  this.render = function() {
    for (let i = 0; i < depth; i++) {
      for (let j = 0; j < width; j++) {
        renderTile(i, j)
      }
    }
  }

  this.updateGrass = function() {
    grass = MATH.add(grass, ground.map(x => x.map(y => 0.1 * y))).map(x =>
      x.map(y => (y <= 1 ? y : 1))
    )
  }

  ground = createWater(3)
  ground = createGround(ground)
  grass = createGrass(ground)

  this.ground = ground
  this.grass = grass
}

export default Map
