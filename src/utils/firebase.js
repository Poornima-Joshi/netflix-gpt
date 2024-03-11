// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBL1Y3yAs2iyxR8irMYlqOyRfySW39pp1A",
  authDomain: "poornima-joshi-netflix-gpt.firebaseapp.com",
  projectId: "poornima-joshi-netflix-gpt",
  storageBucket: "poornima-joshi-netflix-gpt.appspot.com",
  messagingSenderId: "51070408145",
  appId: "1:51070408145:web:291153ab4756092c627cf0",
  measurementId: "G-WGH7NTDJ4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();