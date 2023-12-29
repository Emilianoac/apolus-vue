import { ref } from "vue"
import { getAuth, signOut } from "firebase/auth"

const auth = getAuth()
const error = ref(null)

// logout function
const logout = async () => {
  error.value = null
  try {
    await signOut(auth)
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout