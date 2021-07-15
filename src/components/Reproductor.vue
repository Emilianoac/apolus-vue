<template>
    <aside class="reproductor fixed-bottom">
        <div class="container-fluid py-3">
            <div class="row align-items-center">
                <div class="col-sm-4">
                    <div class="reproductor__cancion-actual">
                        <img 
                            class="cancion-actual__miniatura img-fluid" 
                            src="../../public/img/album-cover/at-swim.webp" 
                            alt="miniatura cancion"
                        />
                        <div class="cancion-actual__datos">
                            <p>SupaLonely</p>
                            <span>Benee</span>
                        </div>
                        <button class="marcar-favorito btn" title="Favorito" data-favorito>
                            <fa icon="heart"/>
                        </button>
                        <button class="btn btn_play d-block d-sm-none" data-play> 
                            <fa icon="play-circle"/> 
                        </button>
                    </div>
                </div>
                <div class="col-sm-4 d-sm-block d-none text-center">
                    <div class="reproductor__controles">
                        <button 
                            class="btn btn_retroceder">
                            <fa icon="backward"/>
                        </button>
                        <button 
                            class="btn btn_play" 
                            title="Reproducir" 
                            data-play> 
                            <fa icon="play-circle"/>
                        </button>
                        <button 
                            class="btn btn_avanzar">
                            <fa icon="forward"/>
                        </button>
                    </div>
                </div>
                <div class="col-sm-4 d-none d-sm-flex justify-content-end align-items-center">
                    <span class="reproductor__duracion">3:15 / 4:40</span>
                    <button class="reproductor__volumen btn p-0 mx-3"><fa icon="volume-up"/></button>
                </div>
            </div>
        </div>
        <ul class="fixed-menu-movil d-flex d-lg-none justify-content-around">
            <li><a href="/buscar"><fa icon="search"/></a></li>
            <li><a href="/favoritas"><fa icon="heart"/></a></li>
            <li><a href="/favoritas"><fa icon="music"/></a></li>
            <li><a href="!#" aria-current="page" data-bs-toggle="modal" data-bs-target="#ajustes"><fa icon="cog"/></a></li>
        </ul>
    </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    :root{
        --load: 40%;
    }

    .reproductor {
        box-shadow: -8px 0px 9px rgba(0, 0, 0, 0.199);
        background-color: var(--bg-color-oscuro);
        color: var(--text-color);

        &::before {
            position: absolute;
            content: '';
            width: var(--load);
            height: 3px;
            top: 0px;
            background-color: dodgerblue;
            z-index: -1;
        }

        .reproductor__cancion-actual {
            display: grid;
            grid-template-columns: 45px minmax(min-content,max-content) min-content;
            column-gap: 10px;

            .cancion-actual__miniatura {
                width: 45px;
                border-radius: 8px;
            }

            .cancion-actual__datos {
                display: grid;
                align-content: flex-start;

                p {
                    font-size: 0.95rem;
                    font-weight: 700;
                    margin-bottom: 0;
                }

                span {
                    font-size: 0.8rem;
                    line-height: 1;
                }
            }

            .marcar-favorito {
                color: var(--color-primario);
                padding: 0;
                font-size: 1.2rem;
                height: 30px;
                width: 30px;
                align-self: flex-start;
                margin-left: 5px;
                line-height: 1;

                &:focus {
                    box-shadow: unset;
                }
            }
        }

        .reproductor__controles {

            .btn {
                padding: 0 0.5rem;
                line-height: 0;
            }

            .btn_play {
                font-size: 2.3rem;
            }

            .btn_avanzar, 
            .btn_retroceder{
                color: var(--text-color);
            }
        }

        .fixed-menu-movil {
            list-style-type: none;
            margin: 0;
            padding: 0.6em;
            background-color:var(--bg-color-oscuro);
            border-top: 1px solid var(--border-color);

            a {
                color:var(--text-color);
            }
        }
    }

    @media(max-width:650px) {

        .reproductor {

            .reproductor__cancion-actual {

                .marcar-favorito {
                    position: absolute;
                    right: 8px;
                    top: 5px;
                    font-size: 0.94rem;
                }

                .btn_play {
                    position: absolute;
                    right: 40px;
                    padding: 0;
                    font-size: 1.9rem;
                }
            }
        }
    }

    @media (max-height: 300px) and (max-width: 650px) {

        .reproductor {
            position: relative !important;
        }
    }
</style>