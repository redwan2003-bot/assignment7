// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUoS566ZMAmzXq70TEhf0yv-lB7i2XN6s",
  authDomain: "ass01-56c37.firebaseapp.com",
  projectId: "ass01-56c37",
  storageBucket: "ass01-56c37.firebasestorage.app",
  messagingSenderId: "1019528578835",
  appId: "1:1019528578835:web:8c132e8eb539142453fce6",
  measurementId: "G-PW6KPE9SV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
