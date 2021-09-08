import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1PgtjeQqoJIrtL0emHpy2pInfBjS6mys",
  authDomain: "todo-app-react-98f8b.firebaseapp.com",
  projectId: "todo-app-react-98f8b",
  storageBucket: "todo-app-react-98f8b.appspot.com",
  messagingSenderId: "156717581804",
  appId: "1:156717581804:web:e4f5a48ab49f6c62666cc9",
  measurementId: "G-59N55QS0CL",
});

const db = firebaseApp.firestore();

export default db;
