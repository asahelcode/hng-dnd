// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy-8DO0nXAboI5gRGCnQrMVuzopiuMdQg",
  authDomain: "hng-dnd.firebaseapp.com",
  projectId: "hng-dnd",
  storageBucket: "hng-dnd.appspot.com",
  messagingSenderId: "221667754190",
  appId: "1:221667754190:web:ffdddf550fc2b6d03e509f",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth()

export {app, auth}
