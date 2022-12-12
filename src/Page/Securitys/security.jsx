import React from "react";
import "./security.css";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <>
      <div className="container">
        <h1>Security and vulnerabilities</h1>
        <p>
          <strong>
            Have you found a vulnerability or security issue with our site?
            You've come to the right place.
          </strong>
        </p>
        <p className="ps-16">
          Fill out this form, including a detailed report of how we can
          reproduce the issue we're having (e.g., what account it's happening
          on), and we'll get back to you within 1 business day (or less if it's
          a particularly urgent issue.)
        </p>
        <p>
          Alternatively, feel free to send an email to{" "}
          <Link to="/" className="contact__email">
            security@wanderlog.com
          </Link>
          , and we'll get back to you all the same.
        </p>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default Security;
