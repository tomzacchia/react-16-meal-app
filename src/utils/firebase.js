// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdFev8wVgWIGFNzkI3FQ70wpan9XFiIXM",
  authDomain: "complete-react-http.firebaseapp.com",
  databaseURL: "https://complete-react-http-default-rtdb.firebaseio.com",
  projectId: "complete-react-http",
  storageBucket: "complete-react-http.appspot.com",
  messagingSenderId: "549132732758",
  appId: "1:549132732758:web:078cec604aeef413e4eef7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const dbMealsRef = ref(db, "meals/");

export default app;
