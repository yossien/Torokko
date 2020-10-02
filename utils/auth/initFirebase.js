import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
}

export default function initFirebase() {
  console.log(firebaseConfig)
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}
