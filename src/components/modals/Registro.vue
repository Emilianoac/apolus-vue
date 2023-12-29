<template>
  <div 
    class="modal modal-apolus fade" 
    id="modalRegistro" 
    tabindex="-1" 
    aria-labelledby="modal-registro" 
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
                <input class="form-control"  v-model="userData.email" type="email" placeholder="Correo electronico"/>
              </div>
              <div class="mb-3">
                <label class="form-label">Nombre de usuario</label>
                <input class="form-control"  v-model="userData.nickname" type="text" placeholder="Correo electronico"/>
              </div>
              <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input class="form-control" v-model="userData.password" type="password" placeholder="Contraseña" />
              </div>
              <div class="mb-3">
                <label class="form-label"> Repetir Contraseña</label>
                <input class="form-control"  type="password" placeholder="Repetir Contraseña"/>
              </div>
              <button 
                class="btn btn-primary w-100 mt-4" 
                type="submit" 
                @click.prevent="createUser(auth, userData.email, userData.password)">
                  Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
  import {reactive, watch} from "vue"
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
  import { doc, setDoc } from "firebase/firestore"
  import {db} from "../../firebase/config"

  import BaseLogotipoSitio from "../BaseLogotipoSitio.vue"

  let userData = reactive({
    email: null,
    password: null,
    nickname: null,
  })
  const auth = getAuth()

  async function createUser(auth, email, password) {
    console.log(email, password)
    if(email && password) {
      try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)

        await updateProfile(auth.currentUser, {
          displayName: userData.nickname, 
        })

        await setDoc(doc(db, "users", userCredential.user.uid), {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          roles: {
            admin: false
          }
        })

        console.log("DONE!")

      } catch(error) {
        console.log(error)
      }
    } else {
      alert('completa los campos por favor')
    }
  }

</script>

<style lang="scss">

</style>