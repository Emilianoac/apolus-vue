<template>
    <div class="reproductor-album">
        <div class="reproductor-album__miniatura">
            <img 
                class="img-fluid" 
                :src="albumReproductor.cover_album" 
                alt=""
            />
        </div>
        <div class="album-datos">
            <p class="album-datos__titulo"> {{albumReproductor.nombre_album }} </p>
            <span class="album-datos__lanzamiento"> {{albumReproductor.fecha_lanzamiento}} </span>
        </div>
        <BaseBotonPlay/>
    </div>
</template>

<script>
    import {useStore} from "vuex"
    import {computed} from "vue"

    import BaseBotonPlay from './BaseBotonPlay.vue'

    export default {
        name: "PerfilArtistaReproductor",
        props: ["artista", "album"],
        components: {
            BaseBotonPlay
        },
        setup(props) {
            const store = useStore()

            return {
                albumReproductor : computed(() => store.state.reproductorPerfilArtista)
            }
        }
    }
</script>

<style lang="scss">

    .reproductor-album {
        display: grid;
        align-items: center;
        grid-column-gap: 10px;
        grid-template-columns: 65px 1fr min-content;
        position: relative;
        border-radius: 8px;
        padding: 0.6em;
        padding-right: 1.7em;
        background-color: var(--bg-color-oscuro);

        .reproductor-album__miniatura {
            height: 100%;

            img {
                object-fit: cover;
                height: 65px;
                border-radius: 8px;
            }
        }

        .album-datos {
            height: 100%;
            
            .album-datos__titulo {
                font-size: 1em;
                font-weight: bold;
                margin-bottom: 0;
            }

            .album-datos__artista {
                font-size: 0.85em;
                margin-bottom: 0;
                color: var(--text-color);
            }

            .album-datos__lanzamiento {
                font-size: 0.85em;
                color: var(--text-color);
                opacity: 0.6;
            }
        }

        .btn_favorito {
            position: absolute;
            right: 12px;
            top: 3px;
            font-size: 1.2em;
        }
    }

</style>