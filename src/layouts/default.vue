<template>
  <div class="main-container">
    <TheMenuSuperior />
    <main class="main">
      <slot />
    </main>
    <TheMenuLateral />
    <BarraControl />
  </div>
</template>

<script setup >
import TheMenuSuperior from '../components/TheMenuSuperior.vue'
import TheMenuLateral from '../components/TheMenuLateral.vue'
import BaseReproductor from '../components/BaseReproductor.vue'
import BarraControl from '../components/BarraControl.vue'
</script>


<style lang="scss">

  body {
    overflow: hidden;
  }

  .main-container {
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-template-rows: min-content;
    //padding-bottom: 4em;
  }

  .main {
    width: 100%;
    max-width: 1820px;
    grid-column: 2/4;
    position: relative;
    padding: 2em 3.4em;
    margin: 0 auto;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100vh;
    padding-bottom: 8em;
  }

  @media(max-width:991px) {

    body {
      height: auto;
    }

    .main-container {
      grid-template-columns: 1fr;
      height: auto;
    }

    .main {
      padding: 2rem;
      padding-bottom: 2rem;
      grid-column: 1/2;
    }
  }

  @media(max-width:650px) {

    .main {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
