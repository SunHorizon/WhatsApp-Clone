import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBXqnunEwKrFxlqRZHRB9VANtG0OihG7TA",
    authDomain: "whatsapp-clone-ce458.firebaseapp.com",
    projectId: "whatsapp-clone-ce458",
    storageBucket: "whatsapp-clone-ce458.appspot.com",
    messagingSenderId: "221681241925",
    appId: "1:221681241925:web:46446602bf9acc1e66b82c",
    measurementId: "G-1KZVSBPCY1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;