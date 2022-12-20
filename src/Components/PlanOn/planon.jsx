import React from "react";
import "./planon.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Planon = () => {
  return (
    <>
      <div className="bg__Planon">
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
                <div className="pt-2 reponsive__planon">
                  <span>
                    <img className="h-40" src="img/AppBadge__ios.png" alt="" />
                  </span>
                  <span>
                    <img
                      className="h-40"
                      src="img/AppBadge__android.png"
                      alt=""
                    />
                  </span>
                </div>
                <div>
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
            <div className="col-6 reponsive__img__planon">
              <div className="telephone__img__planon">
                <img
                  className="w-100"
                  src="img/telephoneLandingPageGetAppPromo__app.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pt-2 reponsive_planon_2">
                  <span>
                    <img className="h-40" src="img/AppBadge__ios.png" alt="" />
                  </span>
                  <span>
                    <img
                      className="h-40"
                      src="img/AppBadge__android.png"
                      alt=""
                    />
                  </span>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planon;
