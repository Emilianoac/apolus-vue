<template>
  <div 
    class="modal modal-apolus fade" 
    id="modalLogin" 
    tabindex="-1" 
    aria-labelledby="modal-login" 
    aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content shadow-card">
          <div class="modal-header border-bottom-0">
            <BaseLogotipoSitio/>
            <button class="modal-cerrar" type="button" data-bs-dismiss="modal">
              <fa icon="times" />
            </button>
          </div>
          <div class="modal-body px-4 px-md-5 pb-5">
            <form>
              <div class="mb-3">
                <label class="form-label">Correo electronico</label>
                <input type="email" placeholder="Correo electronico" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input type="password" placeholder="Contraseña" class="form-control">
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-4">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
  import BaseLogotipoSitio from '../BaseLogotipoSitio.vue';
</script>

<style lang="scss">

</style>