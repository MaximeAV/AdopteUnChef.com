import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiy6kUHiWZzYv_gEKkwoJBVg5wKuDGWoQ",
    authDomain: "adopteunchef-6cb8c.firebaseapp.com",
    projectId: "adopteunchef-6cb8c",
    storageBucket: "adopteunchef-6cb8c.appspot.com",
    messagingSenderId: "1069321932125",
    appId: "1:1069321932125:web:664be5962b23dc977bacb4",
    measurementId: "G-LK6VEELXEE"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };