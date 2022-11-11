import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATcinKYbwhzxPR8sfgfK0RpeMO7EPtnuo",
  authDomain: "my-portfolio-1ec0e.firebaseapp.com",
  projectId: "my-portfolio-1ec0e",
  storageBucket: "my-portfolio-1ec0e.appspot.com",
  messagingSenderId: "654084926909",
  appId: "1:654084926909:web:4a1c16ca5673a4be23b6d4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
