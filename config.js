
import * as firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCDGOykIWaaTtfOJiyjLMnqnS6vS6m-Uxo",
    authDomain: "wili-4a104.firebaseapp.com",
    databaseURL: "https://wili-4a104.firebaseio.com",
    projectId: "wili-4a104",
    storageBucket: "wili-4a104.appspot.com",
    messagingSenderId: "343611669043",
    appId: "1:343611669043:web:07dc44dfd2c18886ac0146"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()