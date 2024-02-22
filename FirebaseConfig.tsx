// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For  JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdNnHpFprCTvaGvGQ-gX7eWZQgCCRI3qM",
  authDomain: "otp-auth-b6d98.firebaseapp.com",
  projectId: "otp-auth-b6d98",
  storageBucket: "otp-auth-b6d98.appspot.com",
  messagingSenderId: "661553008822",
  appId: "1:661553008822:web:f23ed8d10b38bfebc31617",
  measurementId: "G-NRX6NFQRWZ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)