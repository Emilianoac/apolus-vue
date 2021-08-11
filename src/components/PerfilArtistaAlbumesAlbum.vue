<template>
    <figure class="album mb-4 mb-lg-0" @click="seleccionarAlbum">
        <div class="img-container">
            <img class="album__miniatura" :src="album.cover_album"/>
        </div>
        <figcaption class="album__nombre"> 
            {{ album.nombre_album }} 
            <span class="album__fecha">( {{ album.fecha_lanzamiento }} )</span>
        </figcaption>
    </figure>
</template>

<script>
    import {useStore} from "vuex"
 
    export default {
        name: "PerfilArtistaAlbumesAlbum",
        props: ["album"],
        setup(props) {
            const store = useStore()
            const seleccionarAlbum = () => store.commit('SELECCIONAR_ALBUM', props.album)

            return { seleccionarAlbum }
        }
    }
</script>

<style lang="scss">

    .album {
        margin-bottom: 0;
        font-size: 0.90em;
        font-weight: bold;
        text-align: center;
        overflow: hidden;
        cursor: pointer;
        color: var(--text-color);

        .img-container {
            overflow: hidden;
            border-radius: 8px;

            img {
                height: 90px;
                width: 100%;
                object-fit:cover;
                border-radius: 8px;
                transition: 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
            }
        }

        figcaption {
            white-space: nowrap;
            text-overflow:ellipsis;
            overflow: hidden;
            margin-top: 0.5em;
            transition: opacity 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

            span {
                display: block;
                font-size: 0.88em;
                font-weight: normal;
            }
        }

        &:hover img {
            transform: scale(1.040);
            overflow: hidden;
            border-radius: 8px;
        }

        &:hover .album__nombre {
            opacity: 0.6;
        }
    }

</style>