import firebase from 'firebase';
const config =  {
    apiKey: "AIzaSyC_id_PCqTM1axfP_WeNz3ei0WqZKeWi6w",
    authDomain: "task-597a7.firebaseapp.com",
    databaseURL: "https://task-597a7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "task-597a7",
    storageBucket: "task-597a7.appspot.com",
    messagingSenderId: "638912286491",
    appId: "1:638912286491:web:5c28637b9079d0c738cdbe",
    measurementId: "G-DRXWEM4F9F"
};
let fire = firebase.initializeApp(config);
export default fire;
