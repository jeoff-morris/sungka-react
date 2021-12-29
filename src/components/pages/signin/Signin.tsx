import React from "react";

import "./Signin.scss";

export const Signin = (props: any) => {
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
              props.loginGoogle();
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
              props.loginFacebook();
            }}
          >
            Signin with Facebook
          </button>
        </div>
      </div>
    </>
  );
};
