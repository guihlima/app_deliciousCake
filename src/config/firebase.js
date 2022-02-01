import firebase from "firebase"
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCwVdlkBwaM54U7DvxHfABdgZIABdqQwvY",
  authDomain: "deliciouscake.firebaseapp.com",
  projectId: "deliciouscake",
  storageBucket: "deliciouscake.appspot.com",
  messagingSenderId: "472654120604",
  appId: "1:472654120604:web:d135685e331f53cdcc4f59",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore
// var db = firebase.firestore()
export default firebase