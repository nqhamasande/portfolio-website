import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBinZu8TStDoJ7lMBkMRnB3pALs4x0Fqqw",
  authDomain: "portfolio-website-e503a.firebaseapp.com",
  projectId: "portfolio-website-e503a",
  storageBucket: "portfolio-website-e503a.appspot.com",
  messagingSenderId: "172709395534",
  appId: "1:172709395534:web:9719a1b5faf8f637a0971f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);