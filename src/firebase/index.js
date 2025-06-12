import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6uP9mmwfhONBUu3C7BzTmobSKzyjnKl0",
  authDomain: "calendar-b0cdc.firebaseapp.com",
  databaseURL: "https://calendar-b0cdc.firebaseio.com",
  projectId: "calendar-b0cdc",
  storageBucket: "calendar-b0cdc.firebasestorage.app",
  messagingSenderId: "491142366507",
  appId: "1:491142366507:web:32d1eeb2da4c1be99a316e",
  measurementId: "G-QL26NBRFT2"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default db;
export { auth, signInWithPopup, GoogleAuthProvider };
