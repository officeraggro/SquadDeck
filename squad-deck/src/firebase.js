// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKNt1osCmbjt8soXjlAB5DCB-749g1k0U",
  authDomain: "squaddeck-71faf.firebaseapp.com",
  projectId: "squaddeck-71faf",
  storageBucket: "squaddeck-71faf.appspot.com",
  messagingSenderId: "356898323931",
  appId: "1:356898323931:web:76e40da0246486aebbbbfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
