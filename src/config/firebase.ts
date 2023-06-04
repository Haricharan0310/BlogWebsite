// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALBhV_RtZoNPebqghtyz-LqKMAq-M1lAc",
  authDomain: "fir-social-app-51494.firebaseapp.com",
  projectId: "fir-social-app-51494",
  storageBucket: "fir-social-app-51494.appspot.com",
  messagingSenderId: "924684961372",
  appId: "1:924684961372:web:9f057de24acf0bbc9a4899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);