
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7cSD1RClGLaC-9ORqcEr9rZGhAMBSM6U",
  authDomain: "gloop-36989.firebaseapp.com",
  projectId: "gloop-36989",
  storageBucket: "gloop-36989.appspot.com",
  messagingSenderId: "649287042419",
  appId: "1:649287042419:web:12fd7fe006714ebf27f106",
  measurementId: "G-TZKMXRFLF7"
};


const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
export const db = getFirestore(app)
export const auth = getAuth(app);

export default app;