<template>
  <ResultadoCategoria 
    titulo="Más Escuchados"
    :artistas="artistas" 
  />

  <ResultadoCategoria 
    titulo="Grandes exitos del 2000"
    :artistas="artistas" 
  />

  <ResultadoCategoria 
    titulo="En loop"
    :artistas="artistas" 
  />
</template>

<script setup>
  import {computed} from "vue"
  import {useStore} from "vuex"

  import ResultadoCategoria   from "../components/ResultadoCategoria.vue"

  const store = useStore()
  store.dispatch('obtenerArtistas')
  const artistas = computed(() => store.state.artistas)
</script>
