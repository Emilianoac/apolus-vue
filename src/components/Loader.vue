<template>
  <div class="loader"></div>
</template>

<script setup>
</script>

<style lang="scss">
  .loader {
    border-radius: 50px;
    width: 40px;
    height: 40px;
    border: 5px solid transparent;
    border-top-color: var(--color-primario);
    position: relative;
    margin: auto;
    margin-top: 100px;
    animation: cargando 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }

  @keyframes cargando {

    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>