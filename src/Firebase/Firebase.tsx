// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDHGX9XGieqAHELJ7W-DeMNY7IU0hMqjI",
  authDomain: "dpolypixel.firebaseapp.com",
  projectId: "dpolypixel",
  storageBucket: "dpolypixel.appspot.com",
  messagingSenderId: "909372629865",
  appId: "1:909372629865:web:a2be563481f758f97393f8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth }