<template>
  <div class="skeleton" :style="`width: ${width}; height: ${height};`"></div>
</template>

<script setup>

  const props = defineProps({
    width: String,
    height: String,
  })

</script>

<style lang="scss">
  .skeleton {
      width: 100%;
      height: 200px;
      background: linear-gradient(40deg, var(--bg-color-oscuro) 40px, var(--border-color) 80px 50px, var(--bg-color-oscuro));
      background-position: 0;
      background-repeat: no-repeat;
      background-size: 600% 600%;
      border-radius: 6px;
      animation: loader-bg 3s ease-in-out infinite;
    }

    
  @keyframes loader-bg {
    0% {
      background-position: 0% 82%;
    }

    50% {
      background-position: 100% 19%;
    }

    100% {
      background-position: 0% 82%;
    }
  }
</style>