import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD90vgb9LNxjUncGzt7J-cq9CMUtEZ-Jmw",
    authDomain: "marioinfo-fa642.firebaseapp.com",
    databaseURL: "https://marioinfo-fa642.firebaseio.com",
    projectId: "marioinfo-fa642",
    storageBucket: "marioinfo-fa642.appspot.com",
    messagingSenderId: "662561731495"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;