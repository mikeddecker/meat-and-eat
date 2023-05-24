import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfBBJvz69p8d_J9yDIuIcTkEdl2mEA20Y",
  authDomain: "mobile-meat-and-eat.firebaseapp.com",
  projectId: "mobile-meat-and-eat",
  storageBucket: "mobile-meat-and-eat.appspot.com",
  messagingSenderId: "284379235365",
  appId: "1:284379235365:web:8c6eb4666085ee219e2bcc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);