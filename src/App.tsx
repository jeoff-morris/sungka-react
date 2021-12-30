import { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "./firebase/firebase-config";

import { DefaultTemplate } from "./components/templates/DefaultTemplate";
import { About } from "./components/pages/about/About";
import { Contact } from "./components/pages/contact/Contact";
import { CookiesPolicy } from "./components/pages/cookies-policy/CookiesPolicy";
import { DataDeletePolicy } from "./components/pages/data-delete-policy/DataDeletePolicy";
import { Home } from "./components/pages/home/Home";
import { Membership } from "./components/pages/membership/Membership";
import { Play } from "./components/pages/play/Play";
import { PrivacyPolicy } from "./components/pages/privacy-policy/PrivacyPolicy";
import { Profile } from "./components/pages/profile/Profile";
import { Rules } from "./components/pages/rules/Rules";
import { Signin } from "./components/pages/signin/Signin";
import { SungkaHistory } from "./components/pages/sungka-history/SungkaHistory";
import { TermsAndConditions } from "./components/pages/terms-and-conditions/TermsAndConditions";

export const App = () => {
  let darkmode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkmode === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } else if (darkmode === "true") {
      setDarkMode(true);
    } else if (darkmode === "false") {
      setDarkMode(false);
    }
  }, [darkmode]);

  let navigate = useNavigate();
  const auth = getAuth(app);
  const db = getFirestore();
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const [userData, setUserData] = useState({});

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user);
    }
  });

  const loginFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        if (result.user) {
          const user = result.user;
          setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (result.user) {
          const user = result.user;
          setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Routes>
        <Route
          path="/about"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<About />}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<Contact />}
            />
          }
        />
        <Route
          path="/cookies-policy"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<CookiesPolicy />}
            />
          }
        />
        <Route
          path="/data-delete-policy"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<DataDeletePolicy />}
            />
          }
        />
        <Route
          path="/"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<Home />}
            />
          }
        />
        <Route
          path="/membership"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<Membership />}
            />
          }
        />
        <Route
          path="/play"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<Play />}
            />
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<PrivacyPolicy />}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<Profile />}
            />
          }
        />
        <Route
          path="/rules"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<Rules />}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={
                <Signin
                  loginFacebook={loginFacebook}
                  loginGoogle={loginGoogle}
                />
              }
            />
          }
        />
        <Route
          path="/sungka-history"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<SungkaHistory />}
            />
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <DefaultTemplate
              user={userData}
              className={darkMode ? "dark-mode" : "light-mode"}
              page={<TermsAndConditions />}
            />
          }
        />
      </Routes>
    </>
  );
};
