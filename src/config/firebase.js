// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMsHa7FMmzVHRgr1tmfiRagR69J8e16Ak",
  authDomain: "student-management-3a9c0.firebaseapp.com",
  projectId: "student-management-3a9c0",
  storageBucket: "student-management-3a9c0.appspot.com",
  messagingSenderId: "929154566936",
  appId: "1:929154566936:web:4ab60639ade263dc8dac6d",
  measurementId: "G-E3CJ21Y24M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const Count = collection(firestore, "Admission");
export { analytics,firestore,Count}