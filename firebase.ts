import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIBQLFOWhXbmd8-xU65D_MVWTrUWGgqS0",
  authDomain: "chatgpt-messenger-d877c.firebaseapp.com",
  projectId: "chatgpt-messenger-d877c",
  storageBucket: "chatgpt-messenger-d877c.appspot.com",
  messagingSenderId: "928803575152",
  appId: "1:928803575152:web:3bfdf4056ba19e2850ebb5",
  measurementId: "G-DW2DGVP8FZ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export { dataBase }