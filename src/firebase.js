import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCd5ygRuayjEs2lhBARuoSRFkrHSK54tm0",
  authDomain: "wine-club-408cc.firebaseapp.com",
  projectId: "wine-club-408cc",
  storageBucket: "wine-club-408cc.appspot.com",
  messagingSenderId: "583588384374",
  appId: "1:583588384374:web:17d97f850dca9b6097d957"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
