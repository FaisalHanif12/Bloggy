// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-f650d.firebaseapp.com",
  projectId: "blog-f650d",
  storageBucket: "blog-f650d.appspot.com",
  messagingSenderId: "669100249759",
  appId: "1:669100249759:web:d1e747de1a34c8147588aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
