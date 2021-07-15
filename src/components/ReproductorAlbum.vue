<template>
    <div class="reproductor-album">
        <div class="reproductor-album__miniatura">
            <img 
                class="img-fluid" 
                src="../../public/img/album-cover/at-swim.webp" 
                alt=""
            />
        </div>
        <div class="album-datos">
            <p class="album-datos__titulo">Album 1</p>
            <p class="album-datos__artista"> Lisa Hannigan </p>
            <span class="album-datos__lanzamiento">2020</span>
        </div>
        <button class="btn btn_play"><fa icon="play-circle"/></button>
        <BotonFavorito/>
    </div>
</template>

<script>
    import BotonFavorito from '../components/botones/BotonFavorito.vue'

    export default {
        name: "ReproductorAlbum",
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
        grid-template-columns: 65px 1fr 130px;
        position: relative;
        border-radius: 8px;
        padding: 0.6em;
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