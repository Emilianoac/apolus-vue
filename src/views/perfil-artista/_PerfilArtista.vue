<template>
  <div class="main-perfil-artista" v-if="artista.data">
    <div class="row" >
      <div class="col-xl-7 mb-2">
        <!-- BANNER -->
        <Banner :nombre="artista.data.nombre" :banner="artista.data.banner.data.url"/>
        <h2 class="titulo-categoria mt-5"> Álbumes </h2>
        <!-- ALBUMES -->
        <Albumes :albumes="artista.data.albumes"/>
      </div>
      <!-- REPRODUCTOR PERFIL -->
      <div class="col-xl-5">
        <ListadoCanciones :album="artista.data.albumes[0]" :artista="artista.data.nombre"/>
      </div>
    </div>
    <div class="row mt-4">
      <!-- BIOGRAFIA -->
      <div class="col-12">
        <div class="biografia">
          <div class="biografia__texto">
            <h2 class="titulo-categoria">Acerca de</h2>
            <p>{{ artista.data.biografia }}</p>
          </div>
          <div class="biografia__imagen w-100" :style="`background-image: url(${artista.data.banner.data.url})`"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="no-econtrado" v-if="artista.error">
    <h1 class="text-center">Artista no encontrado</h1>
    <fa :icon="['fas', 'compact-disc']"/>
  </div>
  <TheLoader v-if="!artista.error && !artista.data"/>
</template>

<script setup>
  import {ref, watch, reactive} from "vue"
  import {useStore} from "vuex"
  import {useRoute, onBeforeRouteUpdate} from "vue-router"

  import Banner            from "./Banner.vue"
  import Albumes           from "./Albumes.vue"
  import ListadoCanciones  from "./ListadoCanciones.vue"
  import TheLoader         from "../../components/Loader.vue"

  const props = defineProps({
    id: String,
  })

  const store = useStore()
  const route = useRoute()
  const artista = reactive({
    data: false,
    error: false
  })

  store.dispatch("obtenerArtista", route.params.slug)
  watch(() => store.state.artista, (value) => {
    artista.data = value
    artista.error = store.state.error
  })

  watch(() => store.state.error, (value) => {
    artista.error = value
  })

  onBeforeRouteUpdate((to, from, next) => {
    store.dispatch("obtenerArtista", to.params.slug)
    next()
  })
</script>

<style lang="scss">

  .main-perfil-artista {
    
    .biografia {
      display: grid;
      grid-template-columns: 0.8fr 1fr;
      border-radius: 9px;
      overflow: hidden;

      .biografia__imagen {
        background-repeat: no-repeat;
        background-position: top left;
        background-size: cover;
      }
      
      .biografia__texto {
        padding: 1.4em;
        background-color: var(--bg-color-oscuro);
      }
    }
  }

  .no-econtrado {
    text-align: center;
    
    h1 {
      font-weight: 700;
    }

    svg {
      font-size: 3em;
    }
  }

  @media (max-width: 1200px) {

    .main-perfil-artista {

      .biografia {
        display: block;

        .biografia__imagen {
          height: 400px;
        }
      }
    }
  }
  

  @media (max-width: 575px) {

    .main-perfil-artista {

      .biografia {
        display: block;

        .biografia__imagen {
          height: 200px;
        }
      }
    }
  }

</style>