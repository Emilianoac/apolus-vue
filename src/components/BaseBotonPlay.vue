<template>
  <div>
    <button class="boton boton_play" @click="handlePlay()">
      <fa v-if="play" icon="pause-circle"></fa>
      <fa v-else icon="play-circle"/>
    </button>
  </div>
</template>

<script setup>
  import { doc } from "firebase/firestore";
import { reactive, ref } from "vue"
  import { useStore } from "vuex"

  const store = useStore()
  const props = defineProps({
    duracion: String
  })

  const play = ref(false)
  const width = ref(0)

  function handlePlay() {
    let audio = document.querySelector('#cancionReproductor')
    audio.play()

    const duracionCancion = Number(props.duracion.split(":")[0] * 60)  + Number(props.duracion.split(":")[1]) 
    let tiempoTranscurrido = 0
    let porcentaje = 0

    play.value = true
    let isPlaying
    if(play.value) {
      isPlaying = setInterval(() => {
        tiempoTranscurrido ++
        porcentaje = (tiempoTranscurrido/duracionCancion) * 100
        store.commit("ACTUALIZAR_PORCENTAJE_BARRA", porcentaje )

      }, 1000)
    } else {
      clearInterval(isPlaying)
    }
  }
</script>

<style lang="scss">

  .boton_play {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 2.8em;
    border-radius: 100%;
    border: 0;
    z-index: 2;
    color: var(--color-secundario);
    background-color: transparent;

    &::before {
      content: "";
      position: absolute;
      width: 60%;
      height: 60%;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      background-color: white;
    }

    svg {
      transition: box-shadow 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-radius: 100%;
    }

    &:hover svg {
      color: var(--color-secundario);
      box-shadow: 2px 2px 9px var(--color-secundario);
    }
  }
</style>
