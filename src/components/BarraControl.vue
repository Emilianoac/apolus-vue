<template>
  <aside class="barra-control fixed-bottom">
    <BaseReproductor />
    <TheMenuMovil />
  </aside>
</template>

<script setup>
  import BaseReproductor from './BaseReproductor.vue'
  import TheMenuMovil from './TheMenuMovil.vue'
</script>

<style lang="scss">
  .barra-control {
    box-shadow: -8px 0px 9px rgba(0, 0, 0, 0.199);
    background-color: var(--bg-color-oscuro);
    color: var(--text-color);
    transition: height 0.6s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
</style>