// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD62zcv3J_lLqrZiW0ARpHICCptwFHkVr0",
  authDomain: "car-pooling-2bc52.firebaseapp.com",
  databaseURL: "https://car-pooling-2bc52-default-rtdb.firebaseio.com",
  projectId: "car-pooling-2bc52",
  storageBucket: "car-pooling-2bc52.appspot.com",
  messagingSenderId: "698408110382",
  appId: "1:698408110382:web:937467bea53e32d01352bf",
  measurementId: "G-XGFS62KTY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);