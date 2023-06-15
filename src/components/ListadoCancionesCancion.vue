<template>
  <li class="cancion">
    <div class="cancion__container-cover" @click="seleccionarCancion">
      <fa icon="play" class="icono-play" />
      <img class="cancion__cover img-fluid" :src="cover_album" />
    </div>
    <div class="cancion__posicion">
      {{ posicion_cancion }}
      <BaseBotonPlay @click="seleccionarCancion" />
    </div>
    <div class="cancion__titulo"> {{ nombre_cancion }} </div>
    <div class="cancion__artista"> {{ interprete_cancion }} </div>
    <div class="cancion__duracion"> {{ duracion_cancion }} </div>
    <BaseBotonFavorito />
  </li>
</template>

<script setup>
  import { useStore } from "vuex"
  import { computed, ref } from "vue"

  import BaseBotonFavorito from "./BaseBotonFavorito.vue"
  import BaseBotonPlay from "./BaseBotonPlay.vue"

  const props = defineProps({
    duracion_cancion: String,
    posicion_cancion: Number,
    interprete_cancion: String,
    nombre_cancion: String,
    cover_album: String
  })
  const store = useStore()

  function seleccionarCancion() {

    let cancionActual = ref({
      nombre_cancion: props.nombre_cancion,
      interprete_cancion: props.interprete_cancion,
      duracion_cancion: props.duracion_cancion,
      cover_cancion: props.cover_album
    })

    store.commit("SELECCIONAR_CANCION_ACTUAL", cancionActual)
  }
</script>

<style lang="scss">
  .cancion {
    position: relative;
    display: grid;
    grid-template-columns: 14px 1fr 0.8fr 40px 30px;
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
</style>