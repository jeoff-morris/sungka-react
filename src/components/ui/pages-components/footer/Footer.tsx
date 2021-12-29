import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <div>
            <h4>Sungka</h4>
          </div>
          <div>
            <Link to="/about">About Us</Link>
          </div>
          <div>
            <Link to="/rules">Rules</Link>
          </div>
          <div>
            <Link to="/sungka-history">Sungka History</Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h4>Policies</h4>
          </div>
          <div>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
          </div>
          <div>
            <Link to="/cookies-policy">Cookies Policy</Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h4>Membership</h4>
          </div>
          <div>
            <Link to="/membership#benefits">Benefits</Link>
          </div>{" "}
          <div>
            <Link to="/membership#pricing">Pricing</Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>Get in Touch</h4>
        </div>
        <div>
          <div>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <Link to="/contact#contact-form">Contact Form</Link>
          </div>
          <div>
            <Link to="/contact#contact-address">Contact Address</Link>
          </div>
          <div>
            <Link to="/contact#email">Contact us by Email</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
