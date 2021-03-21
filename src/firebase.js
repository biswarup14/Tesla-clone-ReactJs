import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCy-5R_jww5yil2y6hKGLgxiQTJuNuTQho",
  authDomain: "tesla-clone-5f0be.firebaseapp.com",
  databaseURL: "https://tesla-clone-5f0be-default-rtdb.firebaseio.com",
  projectId: "tesla-clone-5f0be",
  storageBucket: "tesla-clone-5f0be.appspot.com",
  messagingSenderId: "944591489058",
  appId: "1:944591489058:web:b4d4c95ac5d2a57eff227b",
  measurementId: "G-NZ3PGF071D"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }