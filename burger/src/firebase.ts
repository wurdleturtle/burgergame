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
  apiKey: 'AIzaSyD_W1GSecwiwRZBglZ_1v-wE4c5MYo8zFQ',
  authDomain: 'burgerwurdleeu.firebaseapp.com',
  projectId: 'burgerwurdleeu',
  storageBucket: 'burgerwurdleeu.firebasestorage.app',
  messagingSenderId: '945085119966',
  appId: '1:945085119966:web:946b3e6e644a81d706714f',
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
