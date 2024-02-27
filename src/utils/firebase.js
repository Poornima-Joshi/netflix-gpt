// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDawlnsrOU8rei_LNtW6ULZKvY9yxxdqUQ",
  authDomain: "netflix-gpt-94ded.firebaseapp.com",
  projectId: "netflix-gpt-94ded",
  storageBucket: "netflix-gpt-94ded.appspot.com",
  messagingSenderId: "331977130027",
  appId: "1:331977130027:web:2ebb25b4857cabed6e6a6e",
  measurementId: "G-PVVH1M0MGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);