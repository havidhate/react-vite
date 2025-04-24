import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxIYVOy9C1pKQq7X73NwRm5CbtL3t6LDA",
  authDomain: "taskmanager-5ec39.firebaseapp.com",
  projectId: "taskmanager-5ec39",
  storageBucket: "taskmanager-5ec39.firebasestorage.app",
  messagingSenderId: "599122853962",
  appId: "1:599122853962:web:839f8665204a89984d66b3",
  measurementId: "G-CVR1RD05R0",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
