<script setup>
  import Reproductor from './Reproductor.vue'
  import MenuMovil from './MenuMovil.vue'
</script>

<template>
  <aside class="barra-control">
    <Reproductor /> 
    <MenuMovil /> 
  </aside>
</template>

<style lang="scss">

  .barra-control {
    box-shadow: -8px 0px 9px rgba(0, 0, 0, 0.199);
    background-color: var(--bg-color-oscuro);
    color: var(--text-color);
    transition: height 0.6s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    margin: auto;
  }
  
  @media (max-width: 575px) {
    
    .barra-control {
      width: 95%;
      bottom: 5px;
      border-radius: 9px;
      overflow: hidden;
    }
  }
</style>