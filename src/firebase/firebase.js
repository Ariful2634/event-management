// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHDMdxMQ4bEDFExZa2VgWIunpD5wTAPy0",
  authDomain: "sports-event-management-e7602.firebaseapp.com",
  projectId: "sports-event-management-e7602",
  storageBucket: "sports-event-management-e7602.appspot.com",
  messagingSenderId: "461773003086",
  appId: "1:461773003086:web:9c0144e398b8b5f4f4261f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;