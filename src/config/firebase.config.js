// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf-o3leCEKk2eIK8rvr4kG8xI8Y6i3UNA",
  authDomain: "ulos-renting-platform.firebaseapp.com",
  projectId: "ulos-renting-platform",
  storageBucket: "ulos-renting-platform.appspot.com",
  messagingSenderId: "553532658970",
  appId: "1:553532658970:web:7c0b09364242c8bbeb88a3",
  measurementId: "G-QF5PJJVTBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
