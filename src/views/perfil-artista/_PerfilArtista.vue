<template>
  <div v-if="error">{{ error }}</div>
  <div class="main-perfil-artista" v-if="artista">
    <div class="row" >
      <div class="col-xl-7 mb-5">
        <!-- BANNER -->
        <Banner :nombre="artista.nombre" :banner="artista.banner.data.url"/>
  
        <!-- ALBUMES -->
        <h2 class="titulo-categoria mt-5"> Álbumes </h2>
        <Albumes :albumes="artista.albumes"/>
      </div>
      <div class="col-xl-5">
        <!-- REPRODUCTOR PERFIL -->
        <ListadoCanciones :album="artista.albumes[0]" :artista="artista.nombre"/>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <!-- BIOGRAFIA -->
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
  import { useRoute }     from 'vue-router'
  import {computed}       from 'vue'
  import {useStore}       from 'vuex'

  import Banner                     from './Banner.vue'
  import Albumes                    from './Albumes.vue'
  import ListadoCanciones           from './ListadoCanciones.vue'
  import TheLoader                  from '../../components/TheLoader.vue'

  const props = defineProps({
    id: String,
  })
  const store = useStore()
  const route = useRoute()

  store.dispatch('obtenerArtista', route.params.slug)
  const artista = computed(() => store.state.artista)

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