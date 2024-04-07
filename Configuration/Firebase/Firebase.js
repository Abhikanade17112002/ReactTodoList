// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPw5MW56nWcJFeEYmSUlnb2HjQmwFSCvA",
  authDomain: "todo-4da6e.firebaseapp.com",
  projectId: "todo-4da6e",
  storageBucket: "todo-4da6e.appspot.com",
  messagingSenderId: "458096357745",
  appId: "1:458096357745:web:4554f9f8037bffba9bc6d0",
  measurementId: "G-BJZSX4YHLN"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = new getFirestore(app) ;