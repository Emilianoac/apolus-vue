import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home.vue"
import {db} from "../firebase/config"
import { getAuth } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"

const requireAuth = async (to, from, next) => {
  let user = getAuth().currentUser
  console.log(user)
  if(user) {
    const userRef = doc(db, "users", user.uid)
    const userSnap = await getDoc(userRef)

    if(userSnap.exists() && userSnap.data().roles.admin) {
      next()
    } else {
      next({ name: "Home" })
    }
  } else {
    next({ name: "Home" })
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/artista/:slug",
    name: "PerfilArtista",
    component: () => import("../views/perfil-artista/_PerfilArtista.vue"),
    props: true,
    meta: {
      title: null ,
      page: "event",
    }
  },

  // Backoffice
  {
    path: "/listado-artistas",
    name: "ListadoArtistas",
    component: () => import("../views/backoffice/ListadoArtistas.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/anadir-artista",
    name: "Añadir artista",
    component: () => import("../views/backoffice/AnadirArtista.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/editar-artista/:id",
    name: "EditarArtista",
    props: true,
    component: () => import("../views/backoffice/EditarArtista.vue"),
    beforeEnter: requireAuth,
  },

  // 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/404.vue"),
    meta: {
      title: "404"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {             
      el: "#app",
      top: -10,
      behavior: "smooth"
    }
  },
})

router.beforeEach((toRoute, fromRoute, next) => {
  if(toRoute.meta && toRoute.params.slug ) {
    window.document.title = `${toRoute.params.slug.split("-").join(" ").toUpperCase()} | Apolus`
  } else {
    window.document.title = "Apolus | Tu musica favorita siempre contigo"
  }
  next()
})

export default router
