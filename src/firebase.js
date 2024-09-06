// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP8yr4jl6e6ffMAHq2Bdj5qfYKIzyHdGc",
  authDomain: "ngo-app-16b6d.firebaseapp.com",
  projectId: "ngo-app-16b6d",
  storageBucket: "ngo-app-16b6d.appspot.com",
  messagingSenderId: "704887481526",
  appId: "1:704887481526:web:977c40bdb623f8c493b217",
  measurementId: "G-GCB3Z44F5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
