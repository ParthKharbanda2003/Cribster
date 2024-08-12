// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cribster-4c63a.firebaseapp.com",
  projectId: "cribster-4c63a",
  storageBucket: "cribster-4c63a.appspot.com",
  messagingSenderId: "699085703537",
  appId: "1:699085703537:web:cec8a07d293cf1730aced0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);