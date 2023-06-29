<template>
  <ul class="menu-movil d-lg-none px-3">
    <li class="text-center">
      <router-link class="menu-movil__link" to="/"><fa icon="home" /></router-link>
      <span class="d-block small">Inicio</span>
    </li>
    <li class="text-center">
      <router-link class="menu-movil__link" to="/favoritas"><fa icon="search" /></router-link>
      <span class="d-block small">Buscar</span>
    </li>
    <li class="text-center">
      <button class="menu-movil__link" aria-current="page" data-bs-toggle="modal" data-bs-target="#ajustes">
        <fa icon="user" />
      </button>
      <span class="d-block small">Mi cuenta</span>
    </li>
  </ul>
</template>

<script setup>
</script>

<style lang="scss">

  .menu-movil {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0.6em;
    background-color: var(--bg-color-oscuro);
    border-top: 1px solid var(--border-color);
    margin-bottom: 0;

    li {

      svg {
        font-size: 0.9em;
      }

      span {
        font-size: 0.82em;
      }

      &:nth-child(1) {
        justify-self: flex-start;
      }

      &:nth-child(3) {
        justify-self: flex-end;
      }
    }

    .menu-movil__link {
      color: var(--text-color);
      padding: 0;
      border: 0;
      background-color: transparent;
    }
  }
</style>