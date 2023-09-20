// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  // storageBucket: "hng-dnd.appspot.com",
  // messagingSenderId: "221667754190",
  appId: process.env.FIREBASE_APPID,
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
// AIzaSyDy-8DO0nXAboI5gRGCnQrMVuzopiuMdQg
// hng-dnd.firebaseapp.com
// hng-dnd
// 1:221667754190:web:ffdddf550fc2b6d03e509f