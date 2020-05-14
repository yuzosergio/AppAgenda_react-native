import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyBAO-lSlK07GDEsEv9zAbAEP0I6IvZQXhI",
    authDomain: "reactnativeapp-a3c8b.firebaseapp.com",
    databaseURL: "https://reactnativeapp-a3c8b.firebaseio.com",
    projectId: "reactnativeapp-a3c8b",
    storageBucket: "reactnativeapp-a3c8b.appspot.com",
    messagingSenderId: "549894163716",
    appId: "1:549894163716:web:3ce23b9411c2c6fc375451",
    measurementId: "G-MBBHGQJX2P"
  };
  
  //verifica se ja tem conexão aberta ou não
  if(!firebase.apps.length){
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;