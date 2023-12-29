import {ref } from "vue"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const auth = getAuth()
const user = ref(null)

onAuthStateChanged(auth, _user => {
  if(_user) {
    user.value = _user
  } else {
  }
})

function getUser() {
  return { user }
}

export default getUser