<script setup>
  import { useStore } from "vuex"
  import { computed, ref } from "vue"

  import BaseBotonFavorito from "./BaseBotonFavorito.vue"
  
  const store = useStore()
  const reproductorMusica = ref(computed(() => store.state.reproductorMusica))

  function convertirSegundosATiempo(segundos) {
    const minutos = Math.floor(segundos / 60)
    const segundosRestantes = segundos % 60

    const segundosFormato = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes
    return minutos + ":" + segundosFormato
  }
</script>

<template>
  <div 
    v-if="reproductorMusica.cancion.detalles"
    class="reproductor" 
    :class="{ reproductor_expandido: reproductorMusica.expandirReproductor }">
      <!-- BARRA PROGRESO CANCION DESKTOP -->
      <div class="barra-progreso-container" v-if="!reproductorMusica.expandirReproductor">
        <div class="barra-progreso-desktop" :style="`width: ${store.state.reproductorMusica.progreso.porcentaje}%`"></div>
      </div>
      <div class="row align-items-center p-2 p-lg-3">
        <div class="col-md-4 col-9">
          <div class="reproductor__informacion">
            <!-- BTN MINIMIZAR REPRODUCTOR-->
            <button 
                class="boton__expandir"    
                v-if="reproductorMusica.expandirReproductor" 
                title="Minimizar"
                @click="store.commit('EXPANDIR_REPRODUCTOR', false)">
                  <fa class="mb-3" icon="chevron-down"/>
            </button>
            <!-- IMAGEN ALBUM -->
            <img 
              class="reproductor__miniatura img-fluid" 
              :src="reproductorMusica.cancion.detalles.cover" 
              @click="store.commit('EXPANDIR_REPRODUCTOR', true)" 
            />
            <div class="reproductor__row">
              <!-- NOMBRE CANCION -->
              <p class="reproductor__titulo-cancion" :title="reproductorMusica.cancion.nombre">
                {{ reproductorMusica.cancion.detalles.nombre }}
              </p>
              <!-- NOMBRE ARTISTA -->
              <span class="reproductor__artista" :title="reproductorMusica.cancion.interprete">
                {{ reproductorMusica.cancion.detalles.interprete }}
              </span>
            </div>
            <!-- BTN FAVORITO -->
            <BaseBotonFavorito />
          </div>
        </div>
        <div class="col-md-4 col-3 d-flex justify-content-center">
          <div class="reproductor__controles-reproducion">
            <!-- CONTROL CANCION ANTERIOR-->
            <button class="control control_retroceder"><fa icon="backward"/></button>
            <!-- CONTROL REPRODUCIR/PAUSAR-->
            <button 
              class="boton boton_play" 
              @click="store.commit('REPRODUCIR_CANCION')">
                <fa icon="play-circle" v-if="!reproductorMusica.estado"></fa>
                <fa icon="pause-circle" v-else></fa>
            </button>
            <!-- CONTROL CANCION SIGUIENTE-->
            <button class="control control_avanzar"><fa icon="forward"/></button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="reproductor__controles-secundarios"> 
            <div class="barra-progreso-container my-2" v-if="reproductorMusica.expandirReproductor">
              <div class="barra-progreso-desktop" :style="`width: ${store.state.reproductorMusica.progreso.porcentaje}%`"></div>
            </div>
            <div class="reproductor__duracion">
              <div class="duracion__inicio">
                {{ convertirSegundosATiempo(store.state.reproductorMusica.progreso.tiempoReproduccionActual) }}
              </div>
              <div class="duracion__separador">/</div>
              <div class="duracion__final">{{ reproductorMusica.cancion.detalles.duracion }}</div>
            </div>
            <!-- VOLUMEN -->
            <div class="reproductor__volumen">
              <button class="volumen__btn me-2">
                <fa class="volumen__icono" icon="volume-up" v-if="reproductorMusica.volumen != 0"/>
                <fa class="volumen__icono" icon="volume-off" v-else />
              </button>
              <input 
                class="volumen__control" 
                v-model="reproductorMusica.volumen" 
                @input="store.commit('ESTABLECER_VOLUMEN')"
                type="range" 
                min="0" 
                max="1" 
                step="0.1"
              />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss">

  .reproductor {
    //box-shadow: -8px 0px 9px rgba(0, 0, 0, 0.199);
    background-color: var(--bg-color-oscuro);
    color: var(--text-color);
    
    .barra-progreso-container {
      width: 100%;
      height: 4px;
      background-color: gray;
    }

    .barra-progreso-desktop {
      height: 4px;
      background-color: var(--color-primario);
      transition: 0.2s lin;
    }

    .reproductor__informacion {
      display: grid;
      grid-template-columns: 45px minmax(min-content, max-content) min-content;
      column-gap: 10px;

      .reproductor__miniatura {
        width: 45px;
        border-radius: 8px;
        cursor: pointer;
      }

      .reproductor__row {
        display: grid;
        align-content: flex-start;

        .reproductor__titulo-cancion {
          font-size: 0.90em;
          font-weight: 700;
          margin-bottom: 0;
          max-width: 230px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .reproductor__artista {
          font-size: 0.78em;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          max-width: 230px;
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
        display: flex;

        .volumen__btn {
          padding: 0;
          border: 0;
          background-color: transparent;
          color: var(--text-color);

          .volumen__icono {
            width: 20px;
          }
        }

        .volumen__control {
          max-width: 90px;
        
        }
      }
    }
  }

  .reproductor.reproductor_expandido {
    //height: calc(100vh);
    padding: 1em;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    top: 0;
    padding-top: 1em;
    //background: linear-gradient(-130deg, rgba(255, 102, 0, 0.938), rgb(72, 72, 255));
    background: rgba(0, 0, 0, 0.822);
    backdrop-filter: blur(11px);
    color: white;
    overflow-y: auto;

    .col-9,
    .col-3,
    .col-md-4 {
      width: 100%;
    }

    .reproductor__informacion {
      grid-template-columns: 1fr;

      .boton__expandir {
        border: 0;
        background: transparent;
        color: white;
        width: max-content;
        font-size: 1.3em;

        &:hover {
          opacity: 0.9;
        }
      }

      .reproductor__miniatura {
        width: 100%;
        width: 50vh;
        margin: auto;
      }

      .reproductor__row {
        padding: 1em 0em;

        .reproductor__titulo-cancion,
        .reproductor__artista {
          max-width: 100%;
        }

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
        color: white;
      }

      .boton_play {
        margin-right: 0;
        font-size: 3.2em;
      }
    }

    .reproductor__controles-secundarios {
      display: block;

      .reproductor__barra-progreso {
        background-color: rgba(246, 246, 246, 0.574);
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
        margin-top: 1em;
      }
    }

  }

  @media(max-width:772px) {

    .reproductor {
      //height: 75px;
      position: relative;
      bottom: 0;

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
  }

  @media (max-height: 530px) and (max-width: 750px) {

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