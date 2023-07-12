<template>
  <div class="main-perfil-artista" v-if="artista">
    <div class="row" >
      <div class="col-xl-7 mb-2">
        <!-- BANNER -->
        <Banner :nombre="artista.nombre" :banner="artista.banner.data.url"/>
        <h2 class="titulo-categoria mt-5"> Álbumes </h2>
        <!-- ALBUMES -->
        <Albumes :albumes="artista.albumes"/>
      </div>
      <!-- REPRODUCTOR PERFIL -->
      <div class="col-xl-5">
        <ListadoCanciones :album="artista.albumes[0]" :artista="artista.nombre"/>
      </div>
    </div>
    <div class="row mt-4">
      <!-- BIOGRAFIA -->
      <div class="col-12">
        <div class="biografia">
          <div class="biografia__texto">
            <h2 class="titulo-categoria">Acerca de</h2>
            <p>{{ artista.biografia }}</p>
          </div>
          <div class="biografia__imagen w-100" :style="`background-image: url(${artista.banner.data.url})`"></div>
        </div>
      </div>
    </div>
  </div>
  <TheLoader v-else/>
</template>

<script setup>
  import {ref, watch} from "vue"
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
  const artista = ref(false)

  store.dispatch("obtenerArtista", route.params.slug)
  watch(() => store.state.artista, (value) => {
    artista.value = value
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