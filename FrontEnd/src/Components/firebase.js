// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC65ZypWMV2OTuJ9Kaow0ebbn8_kmTyzq8",
  authDomain: "game-4b624.firebaseapp.com",
  projectId: "game-4b624",
  storageBucket: "game-4b624.firebasestorage.app",
  messagingSenderId: "163893015214",
  appId: "1:163893015214:web:93e77d17485137112c733f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, signInAnonymously  };
