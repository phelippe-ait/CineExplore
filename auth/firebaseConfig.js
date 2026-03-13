import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBzVXKq3Awhfnl6QgrnOmPbwYMKa2k0suc",
  authDomain: "cineexplore-588c9.firebaseapp.com",
  projectId: "cineexplore-588c9",
  storageBucket: "cineexplore-588c9.firebasestorage.app",
  messagingSenderId: "227090122263",
  appId: "1:227090122263:web:8b61b730f404544407be52",
  measurementId: "G-EDBMDPP6SC",
};

const app = initializeApp(firebaseConfig);
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const db = getFirestore(app);
const analytics = getAnalytics(app);
