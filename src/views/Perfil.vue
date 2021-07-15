<template>
    <Layout>
        <div class="row">
            <div class="col-xl-7 mb-5">
                <Banner/>
                <h2 class="titulo-categoria mt-5"> Albumes </h2>
                <section class="albumes">
                    <figure class="album mb-4 mb-lg-0" v-for="album in 4" :key="album">
                        <div class="img-container">
                            <img class="album__miniatura" 
                                    src="../../public/img/album-cover/at-swim.webp" 
                            />
                        </div>
                        <figcaption class="album__nombre"> 
                            At-swim 
                            <time class="album__fecha" datetime="2019-06-28">(2019)</time>
                        </figcaption>
                    </figure>
                </section> 
            </div>
            <div class="col-xl-5">
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
                <ListaCanciones/>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from '../layouts/default.vue'
    import ListaCanciones from '../components/ListaCanciones.vue'
    import Banner from '../components/Banner.vue'
    import BotonFavorito from '../components/botones/BotonFavorito.vue'
    export default {
        components: {
            Layout,
            ListaCanciones,
            Banner,
            BotonFavorito
        }
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

        .album {
            margin-bottom: 0;
            font-size: 0.90em;
            font-weight: bold;
            text-align: center;
            overflow: hidden;
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

                time {
                    display: block;
                    font-size: 0.88em;
                    font-weight: normal;
                }
            }

            &:hover img {
                transform: scale(1.1);
                overflow: hidden;
                border-radius: 8px;
            }

            &:hover .album__nombre {
                opacity: 0.6;
            }
        }
    }

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