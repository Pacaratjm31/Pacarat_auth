// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnazWIEBzcjvdui-I213mh2aMXGFduBHs",
  authDomain: "pacarat-auth-webapp2.firebaseapp.com",
  projectId: "pacarat-auth-webapp2",
  storageBucket: "pacarat-auth-webapp2.firebasestorage.app",
  messagingSenderId: "899885992179",
  appId: "1:899885992179:web:970e6764e1a9757fb24f86",
  measurementId: "G-7T320JEYFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);