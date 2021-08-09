<template>
    <form class="buscador">
        <div class="buscador__container input-group">
            <input 
                class="buscador__input form-control" 
                type="text" 
                placeholder="Buscar artista, canción o álbum" 
                aria-label="buscador" 
                aria-describedby="buscador"
            />
            <button class="buscador__boton input-group-text" id="buscardor">
                <fa icon="search" />
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        props: ["tipo"]
    }
</script>

<style lang="scss">
    .buscador {
        max-width: 500px;
        width: 100%;

        .buscador__input,
        .buscador__boton {
            background-color: var(--bg-color-claro);
            border: 1px solid var(--border-color);
            color: var(--text-color);
        }
    }

    @media(max-width:991px) {

        .menu-principal {

            .buscador {
                max-width: 100%;
            }
        }
    }

</style>