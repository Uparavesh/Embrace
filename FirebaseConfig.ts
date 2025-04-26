import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDNV_ToRHtxW1DiKR3_w86DMSDibPhFHnw",
    authDomain: "embrace-4777c.firebaseapp.com",
    projectId: "embrace-4777c",
    storageBucket: "embrace-4777c.firebasestorage.app",
    messagingSenderId: "469662471636",
    appId: "1:469662471636:web:f4d6bb1e24185b40507241",
    measurementId: "G-JT27LW1WLH"
  };

  export const firebase_APP = initializeApp(firebaseConfig);
  export const FIREBASE_AUTH = getAuth(firebase_APP);
  export const FIREBASE_DB = getFirestore(firebase_APP);