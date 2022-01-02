import React from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { ref, set, serverTimestamp, update } from "firebase/database";
import { db, auth } from "../../../firebase/firebase-config";

import "./Signin.scss";

export const Signin = (props: any) => {
  let navigate = useNavigate();

  let facebookSignin = async () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        if (result.user) {
          const user = result.user;
          set(ref(db, `users/${user.uid}`), {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let googleSignin = async () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        if (result) {
          const user = result.user;
          set(ref(db, `users/${user.uid}`), {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="page-heading">
        <h2>Signup or Signin</h2>
      </div>
      <div className="signup-or-signin">
        <div>
          <button
            title="Google Login"
            className="btn google-login"
            onClick={() => {
              googleSignin();
            }}
          >
            Signin with Google
          </button>
        </div>
        <div>
          <button
            title="Facebook Login"
            className="btn facebook-login"
            onClick={() => {
              facebookSignin();
            }}
          >
            Signin with Facebook
          </button>
        </div>
      </div>
    </>
  );
};
