import { createApp } from "vue"
import db from "./firebase/config.js"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import {fas}  from "@fortawesome/free-solid-svg-icons"
import {far} from "@fortawesome/free-regular-svg-icons"
import bootstrap from 'bootstrap'
import "./registerServiceWorker"
import App from "./App.vue"
import router from "./router"
import store from "./store"

library.add(fas, far)

let app 

onAuthStateChanged(getAuth(),() => {
  if(!app){
    app = createApp(App)
      .component('fa', FontAwesomeIcon)
      .use(store)
      .use(router)
      .mount('#app')
  }
})



