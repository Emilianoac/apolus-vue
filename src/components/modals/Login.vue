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
                <input class="form-control" v-model="email" type="email" placeholder="Correo electronico">
              </div>
              <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input class="form-control" v-model="password" type="password" placeholder="Contraseña">
              </div>
              <button 
                class="btn btn-primary w-100 mt-4" 
                type="submit" 
                @click.prevent="handleLogin">
                  Iniciar Sesión
              </button>
            </form>
            <div class="d-flex align-items-center">
              <hr class="w-100"><span class="d-block mx-2">o</span><hr class="w-100">
            </div>
            <a 
              class="link-registro d-block text-center"
              href="#!"
              aria-current="page" 
              data-bs-toggle="modal"
              data-bs-target="#modalRegistro">
              Registrarse
            </a>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import useLogin from "../../composables/useLogin"

  import BaseLogotipoSitio from "../BaseLogotipoSitio.vue"

  const { login, error } = useLogin()

  let email = ref('')
  let password = ref('')

  async function handleLogin() {
    await login(email.value, password.value)
    console.log('Done!')
  }

</script>

<style lang="scss">

</style>