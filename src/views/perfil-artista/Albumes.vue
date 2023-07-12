<template>
  <section class="albumes">
    <swiper-container
      init="false"
      class="carrusel"
      :slides-per-view="4" 
      navigation="true"
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
    </swiper-container>
  </section>
</template>

<script setup>
  import { useStore } from "vuex"
  import { ref, onBeforeUpdate, onMounted} from "vue"

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

  onMounted(() => {
    const carrusel = document.querySelector('swiper-container')
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
  
  function seleccionarAlbum(album, i) {
    store.commit('SELECCIONAR_ALBUM', album)
    albumSeleccionado.value = i
  }

  onBeforeUpdate(() => {
    let slide = document.querySelector("swiper-container")
    let items 

    if (window.matchMedia("(max-width: 569px)").matches) {
      items = 2
    } else if (window.matchMedia("(max-width: 759px)").matches) {
      items = 3
    } else if (window.matchMedia("(max-width: 1199px)").matches) {
      items = 4
    } else {
      items = 4
    }
    setTimeout(() => slide.setAttribute("slides-per-view", items), 90)
  })
</script>

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