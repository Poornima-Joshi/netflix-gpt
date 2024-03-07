// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDjTzN4--EL00aTCfmf2MCUwexOMCIY9HE",
  authDomain: "poornima-joshi.firebaseapp.com",
  projectId: "poornima-joshi",
  storageBucket: "poornima-joshi.appspot.com",
  messagingSenderId: "439910404173",
  appId: "1:439910404173:web:ceed6ca7555b32596f4c04",
  measurementId: "G-CZC08ZF303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();