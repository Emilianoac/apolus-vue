import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDorwKxmlIuS0rMV9cuhX8XPY1ONrZ5XME",
  authDomain: "apolus-vue.firebaseapp.com",
  projectId: "apolus-vue",
  storageBucket: "apolus-vue.appspot.com",
  messagingSenderId: "861616978820",
  appId: "1:861616978820:web:c8ff5b6e05fb59f97f3bd1"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }