<template>
  <v-img
    contain
    :height="height"
    class="Logo"
    alt="Davide Z"
    :src="require('@/assets/logo.png')"
  />
</template>

<script>
export default {
  props: ['height']
}
</script>
<style>
.Logo {
  transform: rotateY(360deg);
  animation: turn 4s ease-out forwards 4s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
