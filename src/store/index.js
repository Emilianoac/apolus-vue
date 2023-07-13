import { createStore } from "vuex"
import { db } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"


export default createStore({
  state: {
    artista : null,
    artistas : [],
    cancionActualReproductor: false,
    error : false,
    reproductorPerfilArtista : null,

    reproductor: {
      porcentajeBarra: 0,
      play: false,
      cancion: { 
        
      }
    }
  },
  mutations: {
    OBTENER_ARTISTA(state, artista) {
      state.artista = artista
      state.reproductorPerfilArtista = { ...artista.albumes[0] } 
    },
    OBTENER_ARTISTAS(state, artistas) {
      state.artistas = artistas
    },
    SELECCIONAR_ALBUM(state, album) {
      state.reproductorPerfilArtista = album
    },
    SELECCIONAR_CANCION_ACTUAL(state, cancionActual) {
      state.cancionActualReproductor =  cancionActual
    },

    ACTUALIZAR_PORCENTAJE_BARRA(state, porcentaje) {
      state.reproductor.porcentajeBarra = porcentaje
    }
  },
  actions: {
    async obtenerArtista({commit, state}, slug) {
      try {
        const q = query(collection(db,"artistas"),where("slug", "==", slug))
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            let data = doc.data()
            data.id = doc.id
            commit('OBTENER_ARTISTA', data)
          })
          state.error = false
        } else {
          throw new Error('Este artista no existe')
        }
      }
      catch(err) {
        console.log(err)
        state.error = true
      }
    },
    async obtenerArtistas({commit, state}) {
      try {
        const res = await getDocs(collection(db,'artistas'))
        let resData = res.docs.map(doc => {
         return { ...doc.data(), id: doc.id }
        })
        commit('OBTENER_ARTISTAS', resData )
      }
      catch(err) {
        state.error = err.message
      }  
    }
  },
  modules: {
  }
})
