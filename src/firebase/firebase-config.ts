import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJiLVXo3dAsJrUm9rtiapPbVwlcU1d75Y",
  authDomain: "sungka-react.firebaseapp.com",
  projectId: "sungka-react",
  storageBucket: "sungka-react.appspot.com",
  messagingSenderId: "118064236573",
  appId: "1:118064236573:web:2a8089046320ba86e0def4",
  measurementId: "G-L77DE69RT3",
};

export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
