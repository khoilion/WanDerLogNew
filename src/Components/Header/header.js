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

  const [visible, setVisible] = useState(false); // tắt hiển thị header
  const toggleVisible = () => {
    // khi scroll xuống thì hiển thị header
    const scrolled = document.documentElement.scrollTop; // lấy vị trí scroll
    console.log(scrolled, "scrolled"); // in ra vị trí scroll
    if (scrolled > 1) {
      // nếu scroll lớn hơn 1 thì hiển thị header
      setVisible(true); // hiển thị header
    } else if (scrolled <= 0) {
      // nếu scroll nhỏ hơn 0 thì ẩn header
      setVisible(false); // ẩn header
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {pathName !== "/blog" ? (
        <div className="header-content">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo-homepage align-items-center d-flex">
                <Link to="/">
                  <img src="img/logoWithText.png" alt="" />
                </Link>
                <div>
                  {visible ? (
                    <ul className="d-flex">
                      <li>
                        <Link className="btn-elm-account" to="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="btn-elm-account" to="/guides">
                          Travel guides
                        </Link>
                      </li>
                      <li>
                        <Link className="btn-elm-account" to="/LoginToHome">
                          Hotels
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
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
