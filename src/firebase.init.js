// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMghKu-2qLkP-PSSzO0IGohc6obbtoA_Q",
  authDomain: "inventory-management-sit-d4018.firebaseapp.com",
  projectId: "inventory-management-sit-d4018",
  storageBucket: "inventory-management-sit-d4018.appspot.com",
  messagingSenderId: "1045562481339",
  appId: "1:1045562481339:web:3737e7bc028bb6284be79e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;