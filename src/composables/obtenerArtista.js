
import { ref } from 'vue'
import { apolusFirebase } from '../firebase/config'

const obtenerArtista = (slug) => {

  const artista = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
        let res = await apolusFirebase.collection('artistas').where('slug', '==', slug).get()

        if (!res.empty) {
            const snapshot = res.docs[0];
            const data = snapshot.data();
            artista.value = { ...data, id: res.id }
        } else {
            throw Error('That post does not exist')
        }
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { artista, error, load } 
}

export default obtenerArtista