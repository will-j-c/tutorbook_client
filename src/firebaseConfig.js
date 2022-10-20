// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK6A20vPUPANnUT6Slw0DZVes0DHWMGrE",
  authDomain: "tutorbook-d335b.firebaseapp.com",
  projectId: "tutorbook-d335b",
  storageBucket: "tutorbook-d335b.appspot.com",
  messagingSenderId: "873923851851",
  appId: "1:873923851851:web:41878a9457fe8b9ade7fce",
  measurementId: "G-8E30VLPV2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);