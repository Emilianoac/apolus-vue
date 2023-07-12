import { createApp } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {library} from "@fortawesome/fontawesome-svg-core"
import {fas}  from "@fortawesome/free-solid-svg-icons"
import {far} from "@fortawesome/free-regular-svg-icons"
import "../node_modules/bootstrap/js/dist/modal"
import "./registerServiceWorker"
import App from "./App.vue"
import router from "./router"
import store from "./store"


library.add(fas, far)

let app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')


