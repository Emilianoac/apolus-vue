<template>
  <section class="categoria mt-4">
    <h2 class="titulo-categoria mb-0 mb-lg-4">{{ this.titulo }}</h2>
    <swiper-container
      class="pb-2"
      :slides-per-view="4"      
      :space-between="20">
        <swiper-slide v-for="artista in artistas" :key="artista.id">
          <ResultadoCategoriaTarjeta
            :nombre="artista.nombre_artista" 
            :miniatura="artista.banner" 
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
