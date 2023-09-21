// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW1fVMdyA1jCaWcGH17bMIRSjfLUUU49A",
  authDomain: "validation-one.firebaseapp.com",
  projectId: "validation-one",
  storageBucket: "validation-one.appspot.com",
  messagingSenderId: "102971866285",
  appId: "1:102971866285:web:14429bab9728a41261da24",
  measurementId: "G-T08E2GFV06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);