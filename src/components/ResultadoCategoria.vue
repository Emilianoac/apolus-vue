<template>
  <section class="categoria mt-4">
    <h2 class="titulo-categoria mb-4">{{ this.titulo }}</h2>
    <swiper-container
      class="pb-2"
      :slides-per-view="5"  
      :breakpoints="breakpoints"    
      :space-between="20">
        <swiper-slide v-for="artista in artistas" :key="artista.id">
          <ResultadoCategoriaTarjeta
            :nombre="artista.nombre" 
            :miniatura="artista.banner.data.url" 
            :slug="artista.slug" 
          />
        </swiper-slide>
    </swiper-container>
  </section>
</template>

<script setup>
  import { register } from "swiper/element/swiper-element"
  import ResultadoCategoriaTarjeta from './ResultadoCategoriaTarjeta.vue'
  register()

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
