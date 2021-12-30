import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLUMZ8iM6LjEI-9aXsIk7Na2SbU97ar8A",
  authDomain: "sungka-js.firebaseapp.com",
  projectId: "sungka-js",
  storageBucket: "sungka-js.appspot.com",
  messagingSenderId: "229271332498",
  appId: "1:229271332498:web:bd1caa7eb66190b932e84b",
  measurementId: "G-P63S0H2YMT",
};

export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
