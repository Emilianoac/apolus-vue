import { createStore } from "vuex"
import { db } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import testAudio from "../assets/audio/track1.mp3"

export default createStore({
  state: {
    artista : null,
    artistas : [],
    error : false,
    reproductorPerfilArtista : null,
    reproductorMusica: {
      estado: false,
      volumen: 0.3,
      progreso: {
        progressIntervalId: 0,
        tiempoReproduccionActual: 0,
        porcentaje: 0
      },
      cancion: {
        file: new Audio(testAudio),
        detalles: false,
      },
      expandirReproductor: false,
    },
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

    // MUSIC PLAYER 
    ACTUALIZAR_ESTADO_REPRODUCTOR(state, data) {
      if(data.cancion) {
        state.reproductorMusica.cancion.detalles = data.cancion
      }
      state.reproductorMusica.estado = data.estado? true: false
    },
    ACTUALIZAR_PROGRESO_REPRODUCTOR(state, progress) {
      state.reproductorMusica.progreso.tiempoReproduccionActual = progress.tiempoReproduccionActual
      state.reproductorMusica.progreso.porcentaje = progress.porcentaje
      state.reproductorMusica.progreso.progressIntervalId = progress.progressIntervalId
    },

    REPRODUCIR_CANCION(state, nuevaCancion) {
      const duracionCancion = Math.ceil(state.reproductorMusica.cancion.file.duration)
      let tiempoReproduccionActual = 0
      let porcentaje = 0

      if (state.reproductorMusica.progreso.progressIntervalId) {
        clearInterval(state.reproductorMusica.progreso.progressIntervalId)
      }

      let progressIntervalId = setInterval(() => {
        tiempoReproduccionActual ++
        porcentaje = (tiempoReproduccionActual/duracionCancion) * 100
        state.reproductorMusica.progreso.tiempoReproduccionActual = tiempoReproduccionActual
        state.reproductorMusica.progreso.porcentaje = porcentaje
        state.reproductorMusica.progreso.progressIntervalId = progressIntervalId

        if (porcentaje > 100) {
          state.reproductorMusica.progreso.tiempoReproduccionActual = 0
          state.reproductorMusica.progreso.porcentaje = 0
          clearInterval(state.reproductorMusica.progreso.progressIntervalId)
        }
      }, 1000)

      if(!state.reproductorMusica.cancion.detalles) {
        if(nuevaCancion) {
          state.reproductorMusica.cancion.detalles = nuevaCancion
        }
        state.reproductorMusica.estado = true
      }

      if(nuevaCancion && state.reproductorMusica.cancion.detalles.nombre !== nuevaCancion.nombre) {
        state.reproductorMusica.cancion.file.pause()

        state.reproductorMusica.progreso.tiempoReproduccionActual = 0
        state.reproductorMusica.progreso.porcentaje = 0

        state.reproductorMusica.cancion.detalles = nuevaCancion
        state.reproductorMusica.estado = false
      }

      if (state.reproductorMusica.cancion.file.paused) {
        state.reproductorMusica.cancion.file.currentTime = 0
        state.reproductorMusica.cancion.file.play()
        state.reproductorMusica.estado = true
      } else {
        state.reproductorMusica.progreso.tiempoReproduccionActual = 0
        state.reproductorMusica.progreso.porcentaje = 0
        clearInterval(progressIntervalId)

        state.reproductorMusica.estado = false
        state.reproductorMusica.cancion.file.pause()
      }
    },

    EXPANDIR_REPRODUCTOR(state, status) {
     if(status) {
        state.reproductorMusica.expandirReproductor = true
        document.body.style.overflow = "hidden"
      } else {
        state.reproductorMusica.expandirReproductor = false
        document.body.style.overflow = "unset"
      }
    },

    ESTABLECER_VOLUMEN(state, valor) {
      state.reproductorMusica.cancion.file.volume = state.reproductorMusica.volumen
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
          throw new Error('Esta url no existe')
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
    },
  },
  modules: {
  }
})

