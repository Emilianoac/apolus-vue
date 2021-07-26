<template>
    <div class="reproductor-album">
        <div class="reproductor-album__miniatura">
            <img 
                class="img-fluid" 
                :src="album.cover_album" 
                alt=""
            />
        </div>
        <div class="album-datos">
            <p class="album-datos__titulo"> {{album.nombre_album}} </p>
            <p class="album-datos__artista"> {{artista}} </p>
            <span class="album-datos__lanzamiento"> {{album.fecha_lanzamiento}} </span>
        </div>
        <button class="btn btn_play"><fa icon="play-circle"/></button>
        <BotonFavorito/>
    </div>
</template>

<script>
    import BotonFavorito from '../components/botones/BotonFavorito.vue'

    export default {
        name: "ReproductorAlbum",
        props: ["artista", "album"],
        components: {
            BotonFavorito
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
        padding-right: 2.5em;
        background-color: var(--bg-color-oscuro);

        .reproductor-album__miniatura {
            height: 100%;

            img {
                object-fit: cover;
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