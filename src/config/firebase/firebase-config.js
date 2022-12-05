import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf6ElvQNwdbZq90LKzhSieLSgfhkLvBXE",
  authDomain: "iwanderlog.firebaseapp.com",
  projectId: "iwanderlog",
  storageBucket: "iwanderlog.appspot.com",
  messagingSenderId: "1043556843077",
  appId: "1:1043556843077:web:aa81f061b49eeee4996d2c",
  measurementId: "G-DHV1D8MFGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
export default firebase;

export { auth, db };
