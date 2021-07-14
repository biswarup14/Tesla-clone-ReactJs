import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "#########################",
  authDomain: "tesla-clone-5f0be.firebaseapp.com",
  databaseURL: "##############################3",
  projectId: "tesla-clone-5f0be",
  storageBucket: "tesla-clone-5f0be.appspot.com",
  messagingSenderId: "944591489058",
  appId: "1:944591489058:web:b4d4c95ac5d2a57eff227b",
  measurementId: "G-NZ3PGF071D"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
