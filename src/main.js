import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/js/dist/modal'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

library.add(fas)

let app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')


