// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfBBJvz69p8d_J9yDIuIcTkEdl2mEA20Y",
  authDomain: "mobile-meat-and-eat.firebaseapp.com",
  projectId: "mobile-meat-and-eat",
  storageBucket: "mobile-meat-and-eat.appspot.com",
  messagingSenderId: "284379235365",
  appId: "1:284379235365:web:8c6eb4666085ee219e2bcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);