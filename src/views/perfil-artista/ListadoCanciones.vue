<template>
  
  <div class="reproductor-album">
    <div class="reproductor-album__miniatura">
      <img class="img-fluid" :src="album.cover.data.url" alt="" />
    </div>
    <div class="album-datos">
      <p class="album-datos__titulo"> {{ album.nombre }} </p>
      <span class="album-datos__lanzamiento"> {{ album.fecha_lanzamiento }} </span>
    </div>
    <BotonPlay/>
  </div>

  <h2 v-show="seccion == 'busqueda'" class="titulo-categoria titulo-categoria_lista-canciones"> {{ titulo }}</h2>
  <div class="lista-canciones mt-2">
    <ul class="lista-canciones__contenido">
      <li class="lista-header">
        <div class="lista-header__cancion">#</div>
        <div class="lista-header__cancion">Nombre</div>
        <div class="lista-header__duracion">Duración</div>
        <div class="lista-header__favorito"></div>
      </li>
      <!-- CANCIONES -->
      <li class="cancion" v-for="(cancion, i) in album.canciones">
        <div class="cancion__container-cover" @click="seleccionarCancion(cancion)">
          <fa icon="play" class="icono-play" />
            <img class="cancion__cover img-fluid" :src="album.cover.data.url" />
       </div>
        <div class="cancion__posicion">
          {{ i + 1 }} <BotonPlay @click="seleccionarCancion(cancion)"/>
        </div>
        <div class="cancion__titulo"> {{ cancion.nombre }} </div>
        <div class="cancion__duracion"> {{ cancion.duracion }} </div>
        <BotonFavorito />
      </li>
    </ul>
  </div>
  <hr v-show="seccion == 'busqueda'" class="separador">
</template>

<script setup>
  import { useStore } from "vuex"
  import { computed, ref } from "vue"

  import BotonFavorito from "../../components/BaseBotonFavorito.vue"
  import BotonPlay from "../../components/BaseBotonPlay.vue"

  const props = defineProps({
    artista: String,
    //album: Array,
    seccion: String,
    titulo: String,
  })
  const store = useStore()
  const album = computed(() => store.state.reproductorPerfilArtista)

  function seleccionarCancion(cancion) {

    let cancionActual = {
      nombre: cancion.nombre,
      interprete: album.value.nombre,
      duracion: cancion.duracion,
      cover: album.value.cover.data.url
    }

    store.commit("SELECCIONAR_CANCION_ACTUAL", cancionActual)
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

  .lista-canciones {
    position: relative;
    padding: 1.6em;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--bg-color-oscuro);

    .lista-canciones__contenido {
      max-height: 345px;
      overflow-y: auto;
      list-style-type: none;
      padding: 0em;
      margin: 0;

      .lista-header {
        display: grid;
        grid-template-columns: 14px 1fr 70px 30px;
        justify-content: space-between;
        align-items: center;
        column-gap: 25px;
        padding: 0.6em;
        font-weight: 600;
        font-size: 0.95em;
        border-bottom: 1px solid var(--border-color);
        transition: background-color 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
      }
    }
  }

  .cancion {
    position: relative;
    display: grid;
    grid-template-columns: 14px 1fr 70px 30px;
    justify-content: space-between;
    align-items: center;
    column-gap: 25px;
    font-size: 0.84em;
    padding: 0.6em;
    border-bottom: 1px solid var(--border-color);
    transition: background-color 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);

    .cancion__container-cover {
      display: none;
      position: relative;

      .icono-play {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
      }

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.411);
      }
    }

    .cancion__posicion {

      .boton_play {
        display: none;
      }
    }


    .cancion__titulo,
    .cancion__artista {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &:last-of-type {
      border-bottom: 0;
    }

    &:hover {
      background-color: var(--bg-color-medio);

      .boton_play {
        display: block;
        position: absolute;
        left: 4px;
        top: 0;
        transform: translate(-0%, -0%);
        font-size: 2em;
      }
    }


  }

  @media(max-width:650px) {

    .cancion {
      position: relative;
      grid-template-columns: 50px 1fr max-content;
      column-gap: 10px;
      padding: 1.1em;

      .cancion__container-cover {
        display: block;
        grid-row: 1/3;

        .cancion__cover {
          width: 50px;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
      }

      .cancion__posicion {
        display: none;
      }

      .cancion__titulo {
        font-size: 1.1em;
        font-weight: bold;
      }

      .cancion__artista {
        grid-row: 2;
        grid-column: 2;
        font-size: 0.90em;
      }

      .cancion__duracion {
        grid-row: 2;
        grid-column: 3;
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

  .titulo-categoria.titulo-categoria_lista-canciones {
    margin-top: 2em;
  }

  .separador {
    border-bottom: 1px solid var(--border-color);
    opacity: 1;
    margin: 2em 0;
  }

  @media(max-width:650px) {

    .lista-canciones {
      padding: 0;

      .lista-canciones__contenido {
        padding: 0;
        max-height: max-content;

        .lista-header {
          display: none;
        }
      }

    }
  }
</style>