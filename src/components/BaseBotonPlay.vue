<script setup>
  import { computed, ref} from "vue"
  import { useStore } from "vuex"

  const store = useStore()
  const props = defineProps({
    cancion: Object,
  })

  const reproductorMusica = ref(computed(() => store.state.reproductorMusica))
</script>

<template>
  <div>
    <button 
      class="boton boton_play" 
      @click="store.commit('REPRODUCIR_CANCION', cancion)" 
      title="Reproducir">
        <fa icon="play-circle" v-if="reproductorMusica.cancion.detalles.nombre != cancion.nombre || !reproductorMusica.estado"></fa>
        <fa icon="pause-circle" v-if="reproductorMusica.cancion.detalles.nombre == cancion.nombre && reproductorMusica.estado"></fa>
    </button>
  </div>
</template>

<style lang="scss">
</style>
