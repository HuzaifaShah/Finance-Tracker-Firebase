import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBvwxgQVg1LSihFll8Aw6tAws8dbkf9LIs",
  authDomain: "finance-tracker-cdeaa.firebaseapp.com",
  projectId: "finance-tracker-cdeaa",
  storageBucket: "finance-tracker-cdeaa.appspot.com",
  messagingSenderId: "684516684920",
  appId: "1:684516684920:web:ac7eb71c54fa0ea495a98d",
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }