import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDU7svu9g-jM96lZS-OVhFDlrKZW_YSG5c",
  authDomain: "sungka-app.firebaseapp.com",
  projectId: "sungka-app",
  storageBucket: "sungka-app.appspot.com",
  messagingSenderId: "250834379578",
  appId: "1:250834379578:web:ec85fc04545d38265a2603",
  measurementId: "G-Z4ZL5ZQTCQ",
  databaseURL:
    "https://sungka-app-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);
