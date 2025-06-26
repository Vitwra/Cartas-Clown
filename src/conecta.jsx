// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQT5usXBQiOAqR0hOh8biBaMr_vgR0bHQ",
  authDomain: "cartas-clown.firebaseapp.com",
  projectId: "cartas-clown",
  storageBucket: "cartas-clown.firebasestorage.app",
  messagingSenderId: "431777799921",
  appId: "1:431777799921:web:39d02dce3130d109aa9350",
  measurementId: "G-17LCCF22F0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const conecta = getFirestore(app);