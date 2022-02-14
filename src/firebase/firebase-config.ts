import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCvd3Gub-QsVKTqK5L833BURNb3rAJB7hY",
  authDomain: "sungka-live-online.firebaseapp.com",
  databaseURL:
    "https://sungka-live-online-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sungka-live-online",
  storageBucket: "sungka-live-online.appspot.com",
  messagingSenderId: "86854110563",
  appId: "1:86854110563:web:49de87f6f2e44b5b79d756",
  measurementId: "G-XQJ0H37CSQ",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const auth = getAuth(app);

export const getUser = new Promise((resolve, reject) => {
  const unsubsribe = onAuthStateChanged(
    auth,
    (user) => {
      unsubsribe();
      resolve(user);
    },
    reject
  );
});
