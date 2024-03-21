// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQ5PxfyeJfOrNGWFwDgJxI5pwSEoUeIjE",
  authDomain: "netflix-gpt-215f9.firebaseapp.com",
  projectId: "netflix-gpt-215f9",
  storageBucket: "netflix-gpt-215f9.appspot.com",
  messagingSenderId: "594011777173",
  appId: "1:594011777173:web:42ddf79cf0d16e7127939c",
  measurementId: "G-NCK6L15SZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);


export const auth = getAuth();