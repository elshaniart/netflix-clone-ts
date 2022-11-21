// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi03Ao-ZAO5ZDxXfUq9BTMWJJvvyZNSws",
  authDomain: "netflix-clone-ts-9f13f.firebaseapp.com",
  projectId: "netflix-clone-ts-9f13f",
  storageBucket: "netflix-clone-ts-9f13f.appspot.com",
  messagingSenderId: "142260367290",
  appId: "1:142260367290:web:09314803229a246916f783",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
