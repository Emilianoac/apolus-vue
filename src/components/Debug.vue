

<template>
  <div class="debug-bar">
    <pre class="debug mb-0"><code>{{ store.state.reproductorMusica }}</code></pre>
  </div>
</template>

<script setup>
  import { useStore } from "vuex"

  const store = useStore()

</script>

<style lang="scss" scoped>

  .debug-bar {
    position: fixed;
    background: var(--bg-color-oscuro);
    border: 4px solid var(--color-secundario);
    padding: 2em;
    border-radius: 4px;
    width: 400px;
    max-height: 330px;
    overflow-y: auto;
    z-index: 9999;
  }
</style>