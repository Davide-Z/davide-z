<template>
  <v-layout justify-center>
    <canvas id="simulationCanva"></canvas>
  </v-layout>
</template>

<script>
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": ".*" }] */
import SimulationApp from '~/components/simulation/SimulationApp'

export default {
  mounted() {
    const app = SimulationApp('simulationCanva')
  }
}
</script>

<style>
html {
  overflow: hidden;
}
#simulationCanva {
  width: 80%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
