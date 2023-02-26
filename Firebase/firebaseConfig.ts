// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm3L7W_Tj0keCKy-7GFnEJU_UTAam5wF0",
  authDomain: "eventplanner-f4de2.firebaseapp.com",
  projectId: "eventplanner-f4de2",
  storageBucket: "eventplanner-f4de2.appspot.com",
  messagingSenderId: "1032625496934",
  appId: "1:1032625496934:web:cbdde74f889b9061561ea7",
  measurementId: "G-MZR6XRT2NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);