// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXWVoUq4kYbVz2cGdnuaepRZbVt2LjL7A",
  authDomain: "poornima-joshi-netflixgpt.firebaseapp.com",
  projectId: "poornima-joshi-netflixgpt",
  storageBucket: "poornima-joshi-netflixgpt.appspot.com",
  messagingSenderId: "418850370478",
  appId: "1:418850370478:web:46417e01d7a7a4de2d0e3f",
  measurementId: "G-BTM3NV4CTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();