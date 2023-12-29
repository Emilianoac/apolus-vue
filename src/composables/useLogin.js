import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const error = ref(null)
const auth = getAuth()

const login = async (email, password) => {
  error.value = null
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    error.value = null
    return res

  }
  catch(err) {
    error.value = "Credenciales Invalidas"
  }
}

function useLogin() {
  return { error, login }
}

export default useLogin