import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6VhEABNgdC3ssDEusqP67SDT1bFvriFk",
    authDomain: "ikinci-el-esya-adae9.firebaseapp.com",
    projectId: "ikinci-el-esya-adae9",
    storageBucket: "ikinci-el-esya-adae9.appspot.com",
    messagingSenderId: "586309497279",
    appId: "1:586309497279:web:8c09e743f02761eb40710a",
    measurementId: "G-XBS4VBLFV8"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}