import { ref } from 'vue'
import { apolusFirebase } from '../firebase/config'

const obtenerArtistas = () => {

  const artistas = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await apolusFirebase.collection('artistas').limit(4).get()

      artistas.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { artistas, error, load }
}

export default obtenerArtistas