<template>
  <section class="categoria mt-4">
    <h2 class="titulo-categoria mb-4">{{ this.titulo }}</h2>
    <Skeleton v-if="artistas.length == 0" width="100%" height="180px"/>
    <swiper-container
      :id="`carrusel_categoria_${titulo.split(' ').join('-').toLowerCase()}`"
      init="false"
      class="pb-2"
      :slides-per-view="5" 
      navigation="true"
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
  import { onMounted } from "vue"

  import ResultadoCategoriaTarjeta from "./ResultadoCategoriaTarjeta.vue"
  import Skeleton  from "../components/Skeleton.vue"

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
    const carrusel = document.querySelector(`#carrusel_categoria_${props.titulo.split(' ').join('-').toLowerCase()}`)    
    const styles = {
      injectStyles : [
        `
        .swiper-button-next , .swiper-button-prev {
          background-color: var(--color-secundario);
          border-radius: 50%;
          width: 30px;
          height: 30px;
          border: 1px solid white;
        }
        .swiper-button-next svg , .swiper-button-prev svg {
          width: 13px;
          height: 13px;
          color: white;
        }
        `,
      ],
    }
  
    Object.assign(carrusel, styles)
    carrusel.initialize()
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
