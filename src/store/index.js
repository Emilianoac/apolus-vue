import { createStore } from 'vuex'
import { apolusFirebase } from '../firebase/config'

export default createStore({
  state: {
    artista : null,
    artistas : [],
    cancionActualReproductor: null,
    error : null,
    reproductorPerfilArtista : null
  },
  mutations: {
    OBTENER_ARTISTA(state, artista) {
      state.artista = artista
      state.reproductorPerfilArtista = { ...artista.albumes[0], nombre: artista.nombre_artista } 
    },
    OBTENER_ARTISTAS(state, artistas) {
      state.artistas = artistas
    },
    SELECCIONAR_ALBUM(state, album) {
      state.reproductorPerfilArtista = album
    },
    SELECCIONAR_CANCION_ACTUAL(state, cancionActual) {
      console.log(cancionActual)
      state.cancionActualReproductor =  cancionActual
    }
  },
  actions: {
    async obtenerArtista({commit, state}, slug) {
      try {
          let res = await apolusFirebase.collection('artistas').where('slug', '==', slug).get()
  
          if (!res.empty) {
            const snapshot = res.docs[0]
            const data = snapshot.data()
            commit('OBTENER_ARTISTA', { ...data, id: res.id })
          } else throw Error('That post does not exist')
      }
      catch(err) {
        state.error = err.message
      }
    },
    async obtenerArtistas({commit, state}) {
      try {
        const res = await apolusFirebase.collection('artistas').limit(4).get()
  
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
