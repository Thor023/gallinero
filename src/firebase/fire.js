import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCU03FAN1PuLBKdCq4o_SJpM17I6YDTjjU",
    authDomain: "gallinero-4eff8.firebaseapp.com",
    projectId: "gallinero-4eff8",
    storageBucket: "gallinero-4eff8.appspot.com",
    messagingSenderId: "517666215821",
    appId: "1:517666215821:web:1fc2ce3ffa531313914fc4",
    measurementId: "G-T99T1W6CMF"
  };

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();