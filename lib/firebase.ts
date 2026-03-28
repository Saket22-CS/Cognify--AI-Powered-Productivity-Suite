// lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKwLFRNcY5YEDcPJHZD_p8Ohj_dA6gCeg",
  authDomain: "cognify-12695.firebaseapp.com",
  projectId: "cognify-12695",
  storageBucket: "cognify-12695.firebasestorage.app",
  messagingSenderId: "849051270144",
  appId: "1:849051270144:web:27e22cbfdbcd63948face5",
  measurementId: "G-9MDE9GEQWD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);