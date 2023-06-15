<template>
  <ResultadoCategoria 
    v-if="artistas.length"
    titulo="Más Escuchados"
    :artistas="artistas" 
  />
  <TheLoader v-else/>

  <ResultadoCategoria 
    v-if="artistas.length"
    titulo="Grades exitos del 2000"
    :artistas="artistas" 
  />
  <TheLoader v-else/>

  <ResultadoCategoria 
    v-if="artistas.length"
    titulo="En loop"
    :artistas="artistas" 
  />
  <TheLoader v-else/>
</template>

<script setup>
  import {computed} from 'vue'
  import {useStore} from 'vuex'

  import ResultadoCategoria   from '../components/ResultadoCategoria.vue'
  import TheLoader            from '../components/TheLoader.vue'

  const store = useStore()
  store.dispatch('obtenerArtistas')
  const artistas = computed(() => store.state.artistas)
</script>
