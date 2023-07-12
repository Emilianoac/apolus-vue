<template>
  <ul>
    <li v-for="(artista,i) in artistas">
      <RouterLink :to="`editar-artista/${artista.id}`">{{ artista.nombre }}</RouterLink>
    </li>
  </ul>
</template>

<script setup>
  import {computed} from "vue"
  import {useStore} from "vuex"
  
  const store = useStore()
  store.dispatch('obtenerArtistas')
  const artistas = computed(() => store.state.artistas)

  console.log(artistas.value)
</script>

<style lang="scss" scoped>

</style>