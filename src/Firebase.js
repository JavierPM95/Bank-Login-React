import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_rfM7xx1jm8eWmdvOe74BYKQ-nPTm3r0",
    authDomain: "bank-login-react.firebaseapp.com",
    databaseURL: "https://bank-login-react.firebaseio.com",
    projectId: "bank-login-react",
    storageBucket: "bank-login-react.appspot.com",
    messagingSenderId: "511985840745",
    appId: "1:511985840745:web:20da8ff4296f34bed468f8"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export var user = firebase.auth().currentUser;
  export const fs = firebase.firestore();