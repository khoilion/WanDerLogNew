import LoginSignUp from "../Account/Login/LoginSignUp";
import "./header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-content">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo-homepage">
              <Link to="/">
                <img src="img/logoWithText.png" alt="" />
              </Link>
            </div>
            <div className="d-flex">
              <LoginSignUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
