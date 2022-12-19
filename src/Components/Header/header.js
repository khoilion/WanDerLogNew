import LoginSignUp from "../Account/Login/LoginSignUp";
import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    setPathName(window.location.pathname);
    console.log(pathName);
  }, [window.location.pathname]);

  return (
    <>
      {pathName !== "/blog" ? (
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
