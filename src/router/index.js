import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PerfilArtista from '../views/PerfilArtista.vue'
import Buscar from '../views/Buscar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:slug',
    name: 'PerfilArtista',
    component: PerfilArtista,
    props: true,
    meta: {
      title: null ,
      page: 'event',
    }
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: Buscar
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  console.log(fromRoute)
  window.document.title = toRoute.meta && toRoute.params.slug ? 
  `${toRoute.params.slug.split('-').join(' ')} | Apolus` : 'Apolus'
  next()
})

export default router
