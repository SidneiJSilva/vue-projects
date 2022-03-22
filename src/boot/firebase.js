// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6j2WbP-RW6ZO2PrvA2Z0uQOZ2YCJC5jw",
  authDomain: "vue-projects-66740.firebaseapp.com",
  projectId: "vue-projects-66740",
  storageBucket: "vue-projects-66740.appspot.com",
  messagingSenderId: "891680643837",
  appId: "1:891680643837:web:74a8fc9af34d0dd5bb7c94",
  measurementId: "G-JWP4BYN9V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app }