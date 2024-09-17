
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPy4gSfHb1cuyWE-3gyfBB10kojt-jszw",
  authDomain: "react-todoapp-ff707.firebaseapp.com",
  projectId: "react-todoapp-ff707",
  storageBucket: "react-todoapp-ff707.appspot.com",
  messagingSenderId: "359341463683",
  appId: "1:359341463683:web:20fc9ac3ed3ef76b8de3b6",
  measurementId: "G-G9W7C5Q2B1"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

