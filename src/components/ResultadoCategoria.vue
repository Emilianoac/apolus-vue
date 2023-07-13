<template>
  <section class="categoria mt-4">
    <h2 class="titulo-categoria mb-4">{{ titulo }}</h2>
    <Skeleton v-if="artistas.length == 0" width="100%" height="180px"/>
    <Swiper
      v-else
      :id="`carrusel_categoria_${titulo.split(' ').join('-').toLowerCase()}`"
      class="pb-2 carrusel-artistas"
      :slides-per-view="5" 
      navigation
      :breakpoints="breakpoints" 
      :space-between="20">
        <swiper-slide v-for="artista in artistas" :key="artista.id">
          <ResultadoCategoriaTarjeta
            :nombre="artista.nombre" 
            :miniatura="artista.banner.data.url" 
            :slug="artista.slug" 
          />
        </swiper-slide>
    </Swiper>
  </section>
</template>

<script setup>
  import { onMounted } from "vue"
  import { Swiper, SwiperSlide } from "swiper/vue"
  import SwiperCore, { Navigation } from "swiper"
  import "swiper/swiper-bundle.min.css"

  import ResultadoCategoriaTarjeta from "./ResultadoCategoriaTarjeta.vue"
  import Skeleton  from "../components/Skeleton.vue"

  SwiperCore.use([Navigation])

  const props = defineProps({
    artistas: Array,
    titulo: String
  })
  const breakpoints = {
    330: {
      slidesPerView: 2,
    },
    570: {
      slidesPerView: 3
    },
    990: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    }
  }

  onMounted(() => {

  })
</script>

<style lang="scss">

  .categoria {
    padding-bottom: 2em;
    border-bottom: 1px solid var(--border-color);

    &:last-of-type {
      border-bottom: 0;
    }
  }
</style>
