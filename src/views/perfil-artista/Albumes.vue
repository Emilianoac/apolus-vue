<template>
  <section class="albumes">
    <figure 
      v-for="album in albumes" :key="album"
      class="album mb-4 mb-lg-0" 
      @click="seleccionarAlbum(album)">
        <div class="img-container">
          <img class="album__miniatura" :src="album.cover.data.url"/>
        </div>
        <figcaption class="album__nombre">
          {{ album.nombre }} <span class="album__fecha">( {{ album.fecha_lanzamiento }} )</span>
        </figcaption>
    </figure>
  </section>
</template>

<script setup>
  import { useStore } from "vuex"
  import { watch } from "vue"

  const props = defineProps({
    albumes: Array
  })
  const store = useStore()

  function seleccionarAlbum(album) {
    store.commit('SELECCIONAR_ALBUM', album)
  }
</script>

<style lang="scss">

  .albumes {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 140px);
    column-gap: 15px;
    padding: 1em;
    margin-top: 0.9em;
    border-radius: 8px;
    background-color: var(--bg-color-oscuro);
    overflow: auto;

    .album {
      margin-bottom: 0;
      font-size: 0.90em;
      font-weight: bold;
      text-align: center;
      overflow: hidden;
      cursor: pointer;
      color: var(--text-color);

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
  }
</style>