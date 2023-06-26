// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDorwKxmlIuS0rMV9cuhX8XPY1ONrZ5XME",
    authDomain: "apolus-vue.firebaseapp.com",
    projectId: "apolus-vue",
    storageBucket: "apolus-vue.appspot.com",
    messagingSenderId: "861616978820",
    appId: "1:861616978820:web:c8ff5b6e05fb59f97f3bd1"
  };

// Iniciar Firebase
firebase.initializeApp(firebaseConfig)

const apolusFirebase = firebase.firestore()
const storage = firebase.storage()

export { apolusFirebase, storage }
