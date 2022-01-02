import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDU7svu9g-jM96lZS-OVhFDlrKZW_YSG5c",
  authDomain: "sungka-app.firebaseapp.com",
  projectId: "sungka-app",
  storageBucket: "sungka-app.appspot.com",
  messagingSenderId: "250834379578",
  appId: "1:250834379578:web:ec85fc04545d38265a2603",
  measurementId: "G-Z4ZL5ZQTCQ",
};

export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
