// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5BcxUwzhF7ZJbuZdkW2H6cbTnVKPJi84",
  authDomain: "chat-a9bd0.firebaseapp.com",
  projectId: "chat-a9bd0",
  storageBucket: "chat-a9bd0.appspot.com",
  messagingSenderId: "577353402083",
  appId: "1:577353402083:web:67e245749ffafac4f567d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)