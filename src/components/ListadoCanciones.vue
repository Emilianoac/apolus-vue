<template>
  <h2 v-show="seccion == 'busqueda'" class="titulo-categoria titulo-categoria_lista-canciones">
    {{ titulo }}
  </h2>
  <div class="lista-canciones mt-4">
    <ul class="lista-canciones__contenido">
      <li class="lista-header">
        <div class="lista-header__cancion">#</div>
        <div class="lista-header__cancion">Nombre</div>
        <div class="lista-header__artista">Interprete</div>
        <div class="lista-header__duracion">Duración</div>
        <div class="lista-header__favorito"></div>
      </li>
      <ListaCancionesCancion v-for="(cancion, index) in cancionesAlbum" :key="index"
        :nombre_cancion="cancion.nombre_cancion" :interprete_cancion="cancion.interprete_cancion"
        :duracion_cancion="cancion.duracion_cancion" :posicion_cancion="index + 1" :cover_album="coverAlbum" />
    </ul>
  </div>
  <hr v-show="seccion == 'busqueda'" class="separador">
</template>

<script setup>
  import { useStore } from "vuex"
  import { computed } from "vue"

  import BaseBotonFavorito from "./BaseBotonFavorito.vue"
  import ListaCancionesCancion from "./ListadoCancionesCancion.vue"

  const props = defineProps({
    seccion: String,
    titulo: String,
    album: Array
  })
  const store = useStore()
  const cancionesAlbum = computed(() => store.state.reproductorPerfilArtista.lista_canciones)
  const coverAlbum = computed(() => store.state.reproductorPerfilArtista.cover_album)
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
      overflow-y: auto;
      list-style-type: none;
      padding: 0em;
      margin: 0;

      .lista-header {
        display: grid;
        grid-template-columns: 14px 1fr 0.8fr 40px 30px;
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

  .titulo-categoria.titulo-categoria_lista-canciones {
    margin-top: 2em;
  }

  .separador {
    border-bottom: 1px solid var(--border-color);
    opacity: 1;
    margin: 2em 0;
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

    .lista-canciones .lista-canciones__contenido {
      max-height: 420px;
    }
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