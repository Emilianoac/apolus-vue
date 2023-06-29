import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artista/:slug',
    name: 'PerfilArtista',
    component: () => import('../views/perfil-artista/_PerfilArtista.vue'),
    props: true,
    meta: {
      title: null ,
      page: 'event',
    }
  },

  // Backoffice
  {
    path: '/listado-artistas',
    name: 'ListadoArtistas',
    component: () => import('../views/backoffice/ListadoArtistas.vue'),
  },
  {
    path: '/anadir-artista',
    name: 'Añadir artista',
    component: () => import('../views/backoffice/AnadirArtista.vue'),
  },
  {
    path: '/editar-artista/:id',
    name: 'EditarArtista',
    props: true,
    component: () => import('../views/backoffice/EditarArtista.vue'),
  },
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
