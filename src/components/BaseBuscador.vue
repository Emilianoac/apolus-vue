<template>
  <form class="buscador">
    <div class="buscador__container input-group">
      <input 
        class="buscador__input form-control" 
        @focus="buscador.activo = true"
        v-model="buscador.busqueda"
        type="search" 
        placeholder="Buscar artista o canción"
        aria-label="buscador" 
        aria-describedby="buscador" 
      />
      <button class="buscador__boton input-group-text"><fa icon="search"/></button>
    </div>
    <div class="resultados" v-if="buscador.activo && buscador.resultados.length">
      <ul>
        <li class="resultado" v-for="(resultado, i) in buscador.resultados"> 
          <RouterLink 
            v-if="resultado.tipo == 'Artista'"
            @click="buscador.activo = false" 
            :to="`/artista/${resultado.data.slug}`">
              <img class="img-fluid me-2" :src="resultado.data.banner.data.url"/>
              <div class="w-100">
                <p class="mb-0">{{ resultado.data.nombre }}</p>
                <span class="small"><strong> {{ resultado.tipo }}</strong></span>
              </div>
          </RouterLink>
          <button 
            v-if="resultado.tipo == 'Cancion'"
            @click.prevent="seleccionarCancion(resultado.data)">
              <img class="img-fluid me-2" :src="resultado.data.cover"/>
              <div class="w-100">
                <p class="mb-0 mt-0" :title="resultado.data.nombre">{{ resultado.data.nombre }}</p>
                <span class="tipo-resultado d-block"> {{ resultado.tipo }} </span>
                <span 
                  class="resultado__interprete small" 
                  :title="resultado.data.interprete">
                    {{ resultado.data.interprete }}
                </span>
              </div>
            </button>
          <div v-if="resultado.tipo == 'No resultados'">
            <div>
              <p class="mb-0 mt-0">{{ resultado.data.mensaje }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </form>
  <Overlay v-if="buscador.activo" @click="buscador.activo = false"/>
</template>

<script setup>
  import {ref, watch, computed, reactive} from "vue"
  import {useStore} from "vuex"

  import Overlay from "../components/Overlay.vue"

  const store =useStore()

  const buscador = reactive({
    activo: false,
    busqueda: "",
    resultados: []
  })

  store.dispatch('obtenerArtistas')
  const artistas = computed(() => store.state.artistas)

  watch(() => buscador.busqueda,(newValue, oldValue) => {
    buscador.activo = true

    let tempBusqueda = newValue.toLowerCase()
    buscador.resultados = []

    if(tempBusqueda != "" && tempBusqueda.length > 1) {
      artistas.value.forEach(artista =>  {
        if(artista.nombre.toLowerCase().includes(tempBusqueda)) {
          buscador.resultados.push({
            tipo: "Artista",
            data: artista,
          })
        }

        artista.albumes.forEach(album => {
          album.canciones.forEach(cancion => {
            if(cancion.nombre.toLowerCase().includes(tempBusqueda)) {
              buscador.resultados.push({
                tipo: "Cancion",
                data: { ...cancion , cover: album.cover.data.url },
                imageIsLoaded: false,
              })
            }
          })
        })
      })

      if(buscador.resultados.length == 0) {
        buscador.resultados.push({
          tipo: "No resultados",
          data : {mensaje: `No hay resultados para ${tempBusqueda}`}
        })
      }

    } else if( tempBusqueda != "" && tempBusqueda.length > 0) {
      buscador.resultados.push({
        tipo: "No resultados",
        data : {mensaje: `No hay resultados para ${tempBusqueda}`}
      })
    } else {
      buscador.activo = false
    }
  }, {deep: true})

  function seleccionarCancion(cancion) {
    buscador.activo = false
    store.commit("SELECCIONAR_CANCION_ACTUAL", cancion)
  }
</script>

<style lang="scss">

  .buscador {
    max-width: 600px;
    width: 100%;
    position: relative;
    position: relative;
    z-index: 10000;

    .buscador__container {
      height: 100%;
    }

    .buscador__input,
    .buscador__boton {
      background-color: var(--bg-color-claro);
      border: 1px solid var(--border-color);
      color: var(--text-color);

      &:focus {
        background: var(--bg-color-claro);
        color: var(--text-color);
      }
    }

    .buscador__input {

      &::placeholder {
        color: var(--text-color);
        opacity: 0.6;
      }

      &:active, 
      &:focus {
        border: 1px solid  var(--color-secundario);
        outline: 0;
        box-shadow: unset;
      }
    }

    .resultados {
      position: absolute;
      width: 100%;
      top: 110%;
      background: var(--bg-color-oscuro);
      border-radius: 0px 0px 9px 9px;
      overflow: hidden;
      max-height: 400px;
      overflow-y: auto;

      ul {
        padding: 1em;
        list-style-type: none;
        margin-bottom: 0;

        .resultado {
          margin-bottom: 0.8em;
          
          a,button {
            width: 100%;
            display: grid;
            grid-template-columns: 50px 1fr;
            grid-column-gap: 10px;
            align-items: center;
            color: var(--text-color);
            text-decoration: none;
            border: 0;
            background: transparent;
            text-align: start;

            .img-cont {
              width: 50px;
              height: 50px;
              background-color: var(--border-color);
            }

            img {
              width: 60px;
              object-fit: cover;
              height: 50px;
            }
            
            .tipo-resultado {
              font-size: 0.85em;
            }

            span {
              opacity: 0.6;
            }

            .resultado__interprete, p {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
          }

          &:last-of-type {
            margin-bottom: 0;
          }

          &:hover {
            background: var(--bg-color-claro);
          }
        }
      }

    }
  }

  @media(max-width:991px) {

    .menu-principal {

      .buscador {
        max-width: 100%;
      }
    }
  }
</style>