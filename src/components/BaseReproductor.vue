<template>
  <div v-if="cancionActual" class="reproductor" :class="{ reproductor_expandido: reproductorExpandido }">
    <div class="row align-items-center p-3">
      <div class="col-md-4 col-9">
        <div class="reproductor__informacion">
          <fa v-if="reproductorExpandido" @click="minimizarReproductor" class="mb-3" icon="chevron-down" />
          <img class="reproductor__miniatura img-fluid" @click="expandirReproductor" :src="cancionActual.cover_cancion" />
          <div class="reproductor__row">
            <p class="reproductor__titulo-cancion">
              {{ cancionActual.nombre_cancion }}
            </p>
            <span class="reproductor__artista">
              {{ cancionActual.interprete_cancion }}
            </span>
          </div>
          <BaseBotonFavorito />
        </div>
      </div>
      <div class="col-md-4 col-3 d-flex justify-content-center">
        <div class="reproductor__controles-reproducion">
          <button class="control control_retroceder">
            <fa icon="backward" />
          </button>
          <BaseBotonPlay />
          <button class="control control_avanzar">
            <fa icon="forward" />
          </button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="reproductor__controles-secundarios">
          <div class="reproductor__barra-progreso"></div>
          <div class="reproductor__duracion">
            <div class="duracion__inicio">0:00</div>
            <div class="duracion__separador">/</div>
            <div class="duracion__final">{{ cancionActual.duracion_cancion }}</div>
          </div>
          <button class="reproductor__volumen">
            <fa icon="volume-up" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from "vuex"
  import { computed, ref } from "vue"

  import TheMenuMovil from "./TheMenuMovil.vue"
  import BaseBotonFavorito from "./BaseBotonFavorito.vue"
  import BaseBotonPlay from "./BaseBotonPlay.vue"

  const store = useStore()
  const reproductorExpandido = ref(false)
  const cancionActual = computed(() => store.state.cancionActualReproductor)

  const expandirReproductor = () => {
    if (cancionActual.value && window.matchMedia("(max-width: 772px)").matches) {
      reproductorExpandido.value = true
      document.body.style.overflow = "hidden"
    }
  }

  const minimizarReproductor = () => {
    reproductorExpandido.value = false
    document.body.style.overflow = "unset"
  }
</script>

<style lang="scss">
  .reproductor {
    box-shadow: -8px 0px 9px rgba(0, 0, 0, 0.199);
    background-color: var(--bg-color-oscuro);
    color: var(--text-color);

    .reproductor__informacion {
      display: grid;
      grid-template-columns: 45px minmax(min-content, max-content) min-content;
      column-gap: 10px;

      .reproductor__miniatura {
        width: 45px;
        border-radius: 8px;
      }

      .reproductor__row {
        display: grid;
        align-content: flex-start;

        .reproductor__titulo-cancion {
          font-size: 0.90em;
          font-weight: 700;
          margin-bottom: 0;
        }

        .reproductor__artista {
          font-size: 0.78em;
          line-height: 1;
        }
      }

      .boton_favorito {
        font-size: 1em;
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

    .reproductor__controles-reproducion {
      display: flex;
      justify-content: center;

      .boton_play {
        font-size: 2.3rem;
      }
    }

    .reproductor__controles-secundarios {
      display: flex;
      justify-content: flex-end;

      .barra-progreso {
        display: none
      }

      .reproductor__duracion {
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
      }

      .reproductor__volumen {
        padding: 0;
        border: 0;
        background-color: transparent;
        color: var(--text-color)
      }
    }
  }

  @media(max-width:772px) {

    .reproductor {
      height: 75px;
      position: relative;
      bottom: 0;
      transition: height 0.6s ease-in-out;

      .reproductor__informacion {

        .boton_favorito {
          position: absolute;
          right: 8px;
          top: 8px;
          font-size: 0.8em;
        }

        .reproductor__row {
          display: grid;
          align-content: flex-start;

          .reproductor__titulo-cancion,
          .reproductor__artista {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .reproductor__titulo-cancion {
            font-size: 0.85em;
            font-weight: 700;
            margin-bottom: 0;
          }

          .reproductor__artista {
            font-size: 0.75em;
            line-height: 1;
          }
        }
      }

      .reproductor__controles-reproducion {

        .control_retroceder,
        .control_avanzar {
          display: none;
        }

        .boton_play {
          margin-right: 0.6em;
          font-size: 2.2em;
        }
      }

      .reproductor__controles-secundarios {
        display: none;
      }
    }

    .reproductor.reproductor_expandido {
      height: calc(100vh);
      padding: 1em;
      position: fixed;
      bottom: 0;
      padding-top: 9vh;
      background: linear-gradient(-130deg, rgba(255, 102, 0, 0.938), rgb(72, 72, 255));
      color: white;


      .col-9,
      .col-3 {
        width: 100%;
      }

      .reproductor__informacion {
        grid-template-columns: 1fr;

        .reproductor__miniatura {
          width: 100%;
          margin: auto;
        }

        .reproductor__row {
          padding: 1em 0em;

          .reproductor__titulo-cancion {
            font-size: 1.1em;
          }

          .reproductor__artista {
            font-size: 0.9em;
          }
        }

        .boton_favorito {
          display: none;
        }
      }

      .reproductor__controles-reproducion {

        .control_avanzar,
        .control_retroceder {
          display: block;
          font-size: 1.3em;
        }

        .boton_play {
          margin-right: 0;
          font-size: 3.2em;
        }
      }

      .reproductor__controles-secundarios {
        display: block;

        .reproductor__barra-progreso {
          background-color: #322e2e;
          width: 100%;
          height: 4px;
          margin-top: 1em;
        }

        .reproductor__duracion {
          display: flex;
          justify-content: space-between;
          margin: 0;

          .duracion__separador {
            display: none
          }
        }

        .reproductor__volumen {
          margin: auto;
          display: block;
          margin-right: 0;
          margin-top: 1em;
        }
      }

    }
  }

  @media (max-height: 430px) and (max-width: 750px) {

    .reproductor.reproductor_expandido {
      width: 100%;
      overflow-y: auto;
      padding-top: 4em;

      .reproductor__informacion {
        grid-template-columns: 30px max-content 1fr;

        .reproductor__miniatura {
          max-width: 100px;
          margin: unset;
        }

        .reproductor__row {
          padding: 0;
        }
      }
    }
  }
</style>