import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfMgU_ArttYeixIyg6bzEFVryWXZq-LyM",
  authDomain: "sellcarauth.firebaseapp.com",
  projectId: "sellcarauth",
  storageBucket: "sellcarauth.appspot.com",
  messagingSenderId: "300877573853",
  appId: "1:300877573853:web:c7779bd34f484d04ce3534",
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
