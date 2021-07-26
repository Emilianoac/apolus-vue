<template>
    <h2 class="titulo-categoria titulo-categoria_lista-canciones" v-show="seccion == 'busqueda'"> {{ titulo }} </h2>
    <div class="lista-canciones mt-4">
        <ul class="lista-canciones__contenido"> 
            <li class="lista-header">
                <div class="lista-header__cancion">Nombre</div>
                <div class="lista-header__artista">Artista</div>
                <div class="lista-header__duracion">Duración</div>
                <div class="lista-header__favorito"></div>
            </li>
            <li class="cancion" v-for="cancion in album " :key="cancion">
                <div class="cancion__titulo"> {{cancion.nombre_cancion}} </div>
                <div class="cancion__artista"> {{cancion.interprete_cancion}} </div>   
                <div class="cancion__duracion"> {{cancion.duracion_cancion}} </div>
                <BotonFavorito/>
            </li> 
        </ul>
    </div>
    <hr v-show="seccion == 'busqueda'" class="separador">
</template>

<script>
    import BotonFavorito from "./botones/BotonFavorito.vue"
    export default { 
        name: "ListaCanciones",
        components: {
            BotonFavorito
        },
        props: ["seccion", "titulo", "album"]
    }
</script>

<style lang="scss">

    .lista-canciones {
        position: relative;
        padding: 1.6em;
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--bg-color-oscuro);

        .lista-canciones__contenido {
            max-height: 250px;
            overflow-y: scroll;
            list-style-type: none;
            padding: 0em;
            margin: 0;

            .lista-header,
            .cancion {
                display: grid;
                grid-template-columns: 1fr 1fr 60px 30px;
                justify-content: space-between;
                align-items: center; 
                column-gap: 25px;
                font-size: 0.84em;
                padding: 0.6em;
                border-bottom: 1px solid var(--border-color);
                transition: background-color 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);

                .cancion__titulo, 
                .cancion__artista  {
                    white-space: nowrap;
                    text-overflow:ellipsis;
                    overflow: hidden;
                }

                &:hover {
                    background-color: var(--bg-color-medio);
                }
            }

            .lista-header {
                font-weight: 600;
                font-size: 0.95em;

                &:hover {
                    background-color: unset;
                }
            }
        }
    }
    
    .titulo-categoria.titulo-categoria_lista-canciones {
        margin-top: 2em;
    }

    .separador {
        border-bottom: 1px solid var(--border-color);
        opacity: 1;
        margin : 2em 0;
    }

    @media(min-width:1600px) {

        .lista-canciones .lista-canciones__contenido {
            max-height: 340px;
        }
    }

    @media(min-width:1800px) {

        .lista-canciones .lista-canciones__contenido {
            max-height: 400px;
        }
    }

    @media(min-width:1920px) {

        .lista-canciones .lista-canciones__contenido{
            max-height: 420px;
        }
    }

    @media(max-width:650px) {

        .lista-canciones  {
            padding: 0;

            .lista-canciones__contenido {
                padding: 0;
                max-height: max-content;

                .lista-header {
                    display: none;
                }
        
                .cancion {
                    position: relative;
                    grid-template-columns: 1fr max-content;
                    column-gap: 10px;
                    padding: 1.4em;

                    .cancion__titulo {
                        font-size: 1.1em;
                        font-weight: bold;
                    }

                    .cancion__artista {
                        grid-row: 2;
                        grid-column: 1;
                        font-size: 0.90em;
                    }

                    .cancion__duracion {
                        grid-row: 2;
                        text-align: end;
                    }

                    .btn_favorito {
                        position: absolute;
                        top: 10px;
                        right: 17px;
                        font-size: 1em;
                    }
                }
            }
            
        }
    }
</style>