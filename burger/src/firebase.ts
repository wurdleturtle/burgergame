// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'nuh uh',
  authDomain: 'nuh uh',
  projectId: 'nuh uh',
  storageBucket: 'nuh uh',
  messagingSenderId: 'nuh uh',
  appId: 'nuh uh',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {
  auth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
};
