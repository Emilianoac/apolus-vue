<template>
    <aside class="reproductor fixed-bottom">
        <div class="row align-items-center p-3">
            <div class="col-sm-4 col-7">
                <div class="reproductor__informacion">
                    <img 
                        class="reproductor__miniatura img-fluid" 
                        src="" 
                        alt="miniatura cancion"
                    />
                    <div class="reproductor__row">
                        <p class="reproductor__titulo-cancion">SupaLonely</p>
                        <span class="reproductor__artista">Benee</span>
                    </div>
                    <BotonFavorito/>
                </div>
            </div>
            <div class="col-sm-4 col-5 d-flex justify-content-end justify-content-lg-center">
                <button class="control control_retroceder"><fa icon="backward"/></button>
                <BotonPlay/>
                <button class="control control_avanzar"><fa icon="forward"/></button>
            </div>
            <div class="col-sm-4 d-none d-sm-flex justify-content-end align-items-center">
                <span class="reproductor__duracion">3:15 / 4:40</span>
                <button class="control control__volumen btn p-0 ms-3"><fa icon="volume-up"/></button>
            </div>
        </div>
        <MenuMovil/>
    </aside>
</template>

<script>
    import MenuMovil       from "./MenuMovil.vue"
    import BotonFavorito   from "./botones/BotonFavorito.vue"
    import BotonPlay       from "./botones/BotonPlay.vue"

    export default {
        components: {
            MenuMovil,
            BotonFavorito,
            BotonPlay
        }
    }
</script>

<style lang="scss">

    .reproductor {
        box-shadow: -8px 0px 9px rgba(0, 0, 0, 0.199);
        background-color: var(--bg-color-oscuro);
        color: var(--text-color);

        &::before {
            content: '';
            position: absolute;
            width: 30%;
            height: 3px;
            top: 0px;
            background-color: dodgerblue;
            z-index: -1;
        }

        .reproductor__informacion {
            display: grid;
            grid-template-columns: 45px minmax(min-content,max-content) min-content;
            column-gap: 10px;

            .reproductor__miniatura {
                width: 45px;
                border-radius: 8px;
            }

            .reproductor__row {
                display: grid;
                align-content: flex-start;

                p {
                    font-size: 0.95em;
                    font-weight: 700;
                    margin-bottom: 0;
                }

                span {
                    font-size: 0.8em;
                    line-height: 1;
                }
            }

            .btn_favorito {
                font-size: 1.2em;
                align-self: flex-start;
                margin-left: 5px;
                line-height: 1;
            }
        }

        .control {
            padding: 0 0.5em;
            border: 0;
            background-color: transparent;
            line-height: 0;
            color: var(--text-color);
        }

        .btn_play {
            font-size: 2.3rem;
        }
    }

    @media(max-width:650px) {

        .reproductor {

            .reproductor__informacion {

                .btn_favorito {
                    position: absolute;
                    right: 8px;
                    top: 5px;
                    font-size: 0.94rem;
                }
            }

            .control_retroceder,
            .control_avanzar {
                display: none;
            }

            .btn_play {
                margin-right: 0.6em;
            }
        }
    }

    @media (max-height: 300px) and (max-width: 650px) {

        .reproductor {
            position: relative;
        }
    }
</style>