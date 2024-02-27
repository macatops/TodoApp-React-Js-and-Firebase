// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVAALrMGWHN_3Mu-_QM1dTeyf0eD2fvWo",
  authDomain: "todoapp-f4275.firebaseapp.com",
  projectId: "todoapp-f4275",
  storageBucket: "todoapp-f4275.appspot.com",
  messagingSenderId: "506765788179",
  appId: "1:506765788179:web:55ef21cfe636ba736eebe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
