// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0cd-bGSmAI6FycL4fJGejoUrld2uwT5M",
  authDomain: "ecom-user-auth.firebaseapp.com",
  projectId: "ecom-user-auth",
  storageBucket: "ecom-user-auth.appspot.com",
  messagingSenderId: "350085291858",
  appId: "1:350085291858:web:90446faba44bf7a3b1a48b",
  measurementId: "G-6M2PW72G4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export {app};