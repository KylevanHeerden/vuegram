import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDI2jpQS1Va-Lsryg0pt7vi1ZDeRQCGWkU",
    authDomain: "vuegram-2bfa6.firebaseapp.com",
    projectId: "vuegram-2bfa6",
    storageBucket: "vuegram-2bfa6.appspot.com",
    messagingSenderId: "608173671668",
    appId: "1:608173671668:web:91f81fa3fb18f435a64aa1",
    measurementId: "G-PFJENLC6E5"
  };

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}