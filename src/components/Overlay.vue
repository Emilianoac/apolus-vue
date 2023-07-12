<template>
  <div class="overlay"></div>
</template>

<script setup>

</script>

<style lang="scss">

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.332);
    backdrop-filter: blur(10px);
    z-index: 999;
  }
</style>