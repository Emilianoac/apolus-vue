<template>
  <button class="boton boton_play">
    <fa icon="play-circle" />
  </button>
</template>

<style lang="scss">
  .boton_play {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 2.8em;
    border-radius: 100%;
    border: 0;
    z-index: 2;
    color: var(--color-secundario);
    background-color: transparent;

    &::before {
      content: "";
      position: absolute;
      width: 60%;
      height: 60%;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      background-color: white;
    }

    svg {
      transition: box-shadow 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-radius: 100%;
    }

    &:hover svg {
      color: var(--color-secundario);
      box-shadow: 2px 2px 9px var(--color-secundario);
    }
  }
</style>
