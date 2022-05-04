// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC9yNN1i7fHgQ3iY1zbTc8Bz-IzhzC90g",
  authDomain: "warehouse-management-31966.firebaseapp.com",
  projectId: "warehouse-management-31966",
  storageBucket: "warehouse-management-31966.appspot.com",
  messagingSenderId: "818743099058",
  appId: "1:818743099058:web:da7f71bfd168e56a1413ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;