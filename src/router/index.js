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
  },

  {
    path: '/anadir-artista',
    name: 'Añadir artista',
    component: () => import('../views/AnadirArtista.vue'),
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  if(toRoute.meta && toRoute.params.slug ) {
    window.document.title = `${toRoute.params.slug.split('-').join(' ')} | Apolus`
  } else {
    window.document.title = 'Apolus | Tu musica favorita siempre contigo'
  }
  next()
})

export default router
