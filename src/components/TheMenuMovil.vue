<template>
  <ul class="menu-movil d-lg-none justify-content-around">
    <li><router-link class="menu-movil__link" to="/buscar">
        <fa icon="search" />
      </router-link></li>
    <li><router-link class="menu-movil__link" to="/favoritas">
        <fa icon="heart" />
      </router-link></li>
    <li><router-link class="menu-movil__link" to="/mis-listas-de-reproduccion">
        <fa icon="music" />
      </router-link></li>
    <li>
      <button class="menu-movil__link" aria-current="page" data-bs-toggle="modal" data-bs-target="#ajustes">
        <fa icon="cog" />
      </button>
    </li>
  </ul>
</template>

<script setup>
</script>

<style lang="scss">
  .menu-movil {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0.6em;
    background-color: var(--bg-color-oscuro);
    border-top: 1px solid var(--border-color);
    margin-bottom: 0;

    .menu-movil__link {
      color: var(--text-color);
      padding: 0;
      border: 0;
      background-color: transparent;
    }
  }
</style>