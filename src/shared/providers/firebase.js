import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCB0I2r39rBenJooHp-p4QvUxQIzjwoPKY",
  authDomain: "practica-ce431.firebaseapp.com",
  projectId: "practica-ce431",
  storageBucket: "practica-ce431.appspot.com",
  messagingSenderId: "547487337254",
  appId: "1:547487337254:web:7144935732c2e866998fe7"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);