import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyAQzFZLMptc0kIfRlA9dsxEzw7by8V1X0Q",
    authDomain: "kbtw-project-e536c.firebaseapp.com",
    databaseURL: "https://kbtw-project-e536c.firebaseio.com",
    projectId: "kbtw-project-e536c",
    storageBucket: "kbtw-project-e536c.appspot.com",
    messagingSenderId: "710990313717"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const kajianCollection = db.collection('kajian')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    kajianCollection   
}