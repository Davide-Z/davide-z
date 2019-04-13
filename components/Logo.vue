<template>
  <v-img
    contain
    height="140"
    class="Logo"
    alt="Davide Z"
    :src="require('@/assets/logo.png')"
  />
</template>

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
