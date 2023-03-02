import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
  databaseURL: "https://praca-licanjacka-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyBD8sGpwwXEJBhuP7S6wN1iBpdY80GuqMg",
  authDomain: "praca-licanjacka.firebaseapp.com",
  projectId: "praca-licanjacka",
  storageBucket: "gs://praca-licanjacka.appspot.com",
  messagingSenderId: "79300051811",
  appId: "1:79300051811:web:99ae1df72c2f1aacc38956"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  const auth = firebase.auth();

  export const storage  = firebase.storage();

  export {auth, database};
