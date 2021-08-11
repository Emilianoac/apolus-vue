<template>
    <button class="boton boton_favorito">
        <fa icon="heart"/>
    </button>
</template>

<script>
    export default { }
</script>

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