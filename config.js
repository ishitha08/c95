import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB2Q0KY6ArdUx66vhuGzPLFamnxaOMJBlE",
    authDomain: "fitness-pro-ab150.firebaseapp.com",
    databaseURL: "https://fitness-pro-ab150.firebaseio.com",
    projectId: "fitness-pro-ab150",
    storageBucket: "fitness-pro-ab150.appspot.com",
    messagingSenderId: "369305777537",
    appId: "1:369305777537:web:e952a7e08a4109a3526480",
    measurementId: "G-9C595QSHH4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;