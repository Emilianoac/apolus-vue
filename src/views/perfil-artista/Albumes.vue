<script setup>
  import { useStore } from "vuex"
  import { ref, onBeforeUpdate, onMounted} from "vue"
  import { Swiper, SwiperSlide } from "swiper/vue"
  import SwiperCore, { Navigation } from "swiper"
  import "swiper/swiper-bundle.min.css"

  SwiperCore.use([Navigation])

  const props = defineProps({
    albumes: Array,
  })
  const store = useStore()

  const albumSeleccionado = ref(0) 
  const breakpoints = {
    0: {
      slidesPerView: 2,
    },
    570: {
      slidesPerView: 3
    },
    760: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4
    }
  }

  function seleccionarAlbum(album, i) {
    store.commit('SELECCIONAR_ALBUM', album)
    albumSeleccionado.value = i
  }
</script>

<template>
  <section class="albumes">
    <swiper
      class="carrusel"
      :slides-per-view="4" 
      navigation
      :breakpoints="breakpoints"    
      :space-between="20">
        <swiper-slide v-for="(album, i) in albumes" :key="album">
          <figure 
            class="album" 
            :class="{'seleccionado' : albumSeleccionado == i }"
            @click="seleccionarAlbum(album, i)">
              <div class="img-container">
                <img class="album__miniatura" :src="album.cover.data.url"/>
              </div>
              <figcaption class="album__nombre">
                {{ album.nombre }} <span class="album__fecha">( {{ album.fecha_lanzamiento }} )</span>
              </figcaption>
          </figure>
        </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss">

  .albumes {
    position: relative;
    padding: 1em;
    margin-top: 0.9em;
    border-radius: 8px;
    background-color: var(--bg-color-oscuro);

    .album {
      margin-bottom: 0;
      overflow: hidden;
      color: var(--text-color);
      padding: 0.8em;
      border-radius: 9px;
      font-size: 0.90em;
      font-weight: bold;
      text-align: center;
      cursor: pointer;

      .img-container {
        overflow: hidden;
        border-radius: 8px;

        img {
          height: 140px;
          width: 100%;
          object-fit: cover;
          border-radius: 8px;
          transition: 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }
      }

      figcaption {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 0.5em;
        transition: opacity 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

        span {
          display: block;
          font-size: 0.88em;
          font-weight: normal;
        }
      }

      &:hover img {
        transform: scale(1.040);
        overflow: hidden;
        border-radius: 8px;
      }

      &:hover .album__nombre {
        opacity: 0.6;
      }
    }

    .album.album.seleccionado {
      background: var(--bg-color-claro);
    }
  }
</style>