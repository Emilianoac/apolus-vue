<template>
  <button 
    class="boton boton_favorito"
    aria-current="page" 
    data-bs-toggle="modal"
    data-bs-target="#modalLogin"
    title="Añadir a favoritos">
      <fa :icon="['far', 'heart']" />
  </button>
</template>


<style lang="scss">
  .boton_favorito {
    font-size: 1.2em;
    padding: 0;
    border: 0;
    color: var(--color-primario);
    background-color: transparent;

    &:focus {
      box-shadow: unset;
    }
  }
</style>