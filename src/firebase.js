import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAH2Y-zgI-RUZ7-KgV_g7rKArvlEnbZ9Ic",
    authDomain: "clone-29fa8.firebaseapp.com",
    projectId: "clone-29fa8",
    storageBucket: "clone-29fa8.appspot.com",
    messagingSenderId: "380138668886",
    appId: "1:380138668886:web:f1471827e28e047cca0cf7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};