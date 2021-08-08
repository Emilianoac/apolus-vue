<template>
    <section class="albumes">
        <PerfilArtistaAlbumesAlbum
            v-for="album in albumes" 
            :key="album"
            :album="album"
        />
    </section> 
</template>

<script>
    import {useStore} from "vuex"
    import {watch} from "vue"

    import PerfilArtistaAlbumesAlbum from "./PerfilArtistaAlbumesAlbum.vue"
 
    export default {
        name: "Albumes",
        props: ["albumes"],
        components: {
            PerfilArtistaAlbumesAlbum
        },
        setup(props) { }
    }
</script>

<style lang="scss">

    .albumes {
        position: relative;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 15px;
        padding: 1em;
        margin-top: 0.9em;
        border-radius: 8px;
        background-color: var(--bg-color-oscuro);
    }

    @media (max-width: 575px) {

        .albumes {
            overflow-x: scroll;
            grid-template-columns: repeat(4, 90px);
        }
    }
</style>