import React from "react";
import "./travelbudget.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import Planlike from "../../Components/PlanLike/planlike";
import PlanYourTrip from "../../Components/PlanYourTrip/planyourtrip";
import { useEffect } from "react";
import { Progress } from "antd";

const TravelBudget = () => {
  const [showDropdownGetTheApp, setShowDropdownGetTheApp] = useState(false);
  const handleChangeshowDropdownGetTheApp = () => {
    setShowDropdownGetTheApp(!showDropdownGetTheApp);
  };
  const [percent, setPercent] = useState(25);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (percent === 25) {
        setTimeout(() => {
          setPercent(60);
        }, 1000);
        setTimeout(() => {
          setPercent(68);
        }, 2000);
        setTimeout(() => {
          setPercent(75);
        }, 3000);
      }

      return () => clearTimeout(timer);
    });
  }, [percent]);

  return (
    <div className="travelbudget">
      <section className="container">
        <div className="row">
          <div className="col-5 text-start">
            <div>
              <h1>Track travel expenses and split costs with friends</h1>
              <p>
                Organize your spending and group travel budget with our free
                travel expense and budgeting app.
              </p>
            </div>
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
                      <img className="qr__code" src="img/QRcode.png" alt="" />
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
                            <label for="first-name" class="ha-screen-reader">
                              Mobile number
                            </label>
                            <input
                              id="first-name"
                              class="field__input field__input__2"
                              placeholder="+++++"
                            />
                            <span class="field__label-wrap" aria-hidden="true">
                              <span class="field__label">Mobile number</span>
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
                className=" btn btn-app "
              >
                <button>Get the app</button>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="BudgetLandingPageAnimation__section">
              <div className="BudgetLandingPageAnimation__background mb-3">
                <div className="Font___">$500.00</div>
                <div>
                  <Progress percent={percent} />
                  {/* <div className="progress">
                    <div
                      className="progress-bar w-25"
                      percent={percent}
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="25"
                      aria-valuemax="100"
                    ></div>
                  </div> */}
                </div>
              </div>
              <div className="bg-white p-3 shadow rounded-16">
                <div className="d-flex">
                  <div className="me-2">
                    <GiAirplaneDeparture />
                  </div>
                  <div className="mr-auto fw-600">Flights to Hawaii</div>
                  <div className="ms-4 fw-600">$500</div>
                </div>
              </div>
              <div className="bg-white p-3 shadow rounded-16 mt-3">
                <div className="d-flex">
                  <div className="me-2">
                    <BiBed />
                  </div>
                  <div className="mr-auto fw-600">
                    Lodging at Waikiki Resort
                  </div>
                  <div className="ms-4 fw-600">$950</div>
                </div>
              </div>
              <div className="bg-white p-3 shadow rounded-16 mt-3">
                <div className="d-flex">
                  <div className="me-2">
                    <GiKnifeFork />
                  </div>
                  <div className="mr-auto fw-600">Dinner at Hula Grill</div>
                  <div className="ms-4 fw-600">$200</div>
                </div>
              </div>
              <div className="bg-white p-3 shadow rounded-16 mt-3">
                <div className="d-flex">
                  <div className="me-2">
                    <GiGlassCelebration />
                  </div>
                  <div className="mr-auto fw-600">Drinks at Mai Tai Bar</div>
                  <div className="ms-4 fw-600">$150</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="container margin___section row justify-content-center">
          <div className="col-sm-6 col-lg-4 text-center text__content__ pt-5">
            <img src="img/BudgetFeatureTiles__track.png" alt="" />
            <h3>Track travel expenses</h3>
            <p>
              Keep track of your spending to make sure you don’t go over your
              budget.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center text__content__ pt-5">
            <img src="img/BudgetFeatureTiles__split.png" alt="" />
            <h3>Split travel expenses with friends</h3>
            <p>
              Great as a group and family travel budget tracker to see who owes
              who.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center text__content__ pt-5">
            <img src="img/BudgetFeatureTiles__breakdown.png" alt="" />
            <h3>See breakdown of your expenses</h3>
            <p>
              Visualize and compare how much you spent in each category and day.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center text__content__ pt-5">
            <img src="img/BudgetFeatureTiles__categories.png" alt="" />
            <h3>Stay organized with categories</h3>
            <p>
              Quickly assign a category to your expense to easily sort them
              later.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center text__content__ pt-5">
            <img src="img/BudgetFeatureTiles__convert.png" alt="" />
            <h3>Converts to any currency</h3>
            <p>
              Add any item as the foreign currency you spent, and see the total
              as your home currency.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-purple-lightest p-0">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="content__text__planon">
                <div className="fw-700 fs-24">
                  <span>Plan on the go with our</span>
                  <Link className="hover__text__planon" to="/mobileApp">
                    free travel app
                  </Link>
                </div>
                <div className="pt-2">
                  <p className="fs-18">
                    With Wanderlog's mobile travel planner on Android and iOS,
                    access and edit your trips wherever you go — even while
                    offline.
                  </p>
                </div>
                <div className="d-flex pt-2">
                  <img className="h-40" src="img/AppBadge__ios.png" alt="" />
                  <img
                    className="h-40"
                    src="img/AppBadge__android.png"
                    alt=""
                  />
                </div>
                <div className="pt-3">
                  <nav>
                    <ul className="d-flex">
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                    </ul>
                  </nav>
                  <p className="fs-12">4.9 on App Store, 4.7 on Google Play</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="telephone__img__planon">
                <img
                  className="w-100"
                  src="img/BudgetLandingPageGetAppPromo__app.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <Planlike />
      </section>
      <section className="bg-white">
        <PlanYourTrip />
      </section>
    </div>
  );
};

export default TravelBudget;
