import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PlanYourTrip from "../PlanYourTrip/planyourtrip";

const Banner = () => {
  const [showDropdownGetTheApp, setShowDropdownGetTheApp] = useState(false);
  const handleChangeshowDropdownGetTheApp = () => {
    setShowDropdownGetTheApp(!showDropdownGetTheApp);
  };

  const [visible, setVisible] = useState(true);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setVisible(false);
    } else if (scrolled <= 20) {
      setVisible(true);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="banner">
        <div className="anh1">
          <div>
            <img
              className="w-100 z-index-39"
              src="img/Banner__page.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-100 banner__img z-index-40"
              src="img/LandingPageHero__girl1.png"
              alt=""
            />
          </div>
          <div>
            {visible ? (
              <img
                className="w-100 banner__img z-index-41"
                src="img/LandingPageHero__path.png"
                alt=""
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="container">
          <div className="row reponsive_textcontent_banner">
            <div className="col-6">
              <div className="content__text__banner">
                <h1>You'll never travel without our trip planner again</h1>
                <p>
                  Build, organize, and map your itineraries in a free travel app
                  designed for vacations & road trips
                </p>
                <div className="d-flex justify-content-center pt-4 align-items-center">
                  <div className=" btn btn-start">
                    <Link to="/createplan">Start planning</Link>
                  </div>
                  {/* ==========BoxGetTheAppHome=========== */}
                  {showDropdownGetTheApp ? (
                    <div className="box__show__gettheapp">
                      <div>
                        <h3>Scan the QR code or enter your mobile number.</h3>
                      </div>
                      <div className="row">
                        <div className="col-3">
                          <img
                            className="qr__code"
                            src="img/QRcode.png"
                            alt=""
                          />
                        </div>
                        <div className="col-1">
                          <div className="line__qr">
                            <span className="line__ pt-2 pb-2">or</span>
                          </div>
                        </div>
                        <div className="col-8">
                          <p className="text-muted fs-14">
                            We’ll text you a link to download the app.
                          </p>
                          <div className="d-flex align-items-center row">
                            <div className="col-3">
                              <div className="area__code">
                                <span className="me-2">+1</span>
                                <span>
                                  <IoIosArrowDown />
                                </span>
                              </div>
                            </div>
                            <div class="page col-9 p-0">
                              <div class="field field_v1">
                                <label
                                  for="first-name"
                                  class="ha-screen-reader"
                                >
                                  Mobile number
                                </label>
                                <input
                                  id="first-name"
                                  class="field__input field__input__2"
                                  placeholder="+++++"
                                />
                                <span
                                  class="field__label-wrap"
                                  aria-hidden="true"
                                >
                                  <span class="field__label">
                                    Mobile number
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="mt-3">
                              <div className="text-center button__brand">
                                Senp app link
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div
                    onClick={handleChangeshowDropdownGetTheApp}
                    className=" btn btn-app"
                  >
                    <button>Get the app</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="reponsive__components__banner">
        <PlanYourTrip />
      </div>
    </>
  );
};

export default Banner;
