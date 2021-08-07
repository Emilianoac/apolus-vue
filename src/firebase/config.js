import firebase from 'firebase/app'
import 'firebase/firestore'

const {API_KEY, AUTH_DOMAIN, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID} = process.env

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: "apolus-vue",
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
};


// Iniciar Firebase
firebase.initializeApp(firebaseConfig)

// Iniciar Firestore
const apolusFirebase = firebase.firestore()

export  {apolusFirebase}
