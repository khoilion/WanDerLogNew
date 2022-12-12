import React from "react";
import "./mobileapp.css";
import { AiFillStar } from "react-icons/ai";
import TravelersComents from "../../../src/Components/TravelersComents/travelerscoments";
import FeaturesTools from "../../Components/FeaturesTools/featurestools";
import Investors from "../../Components/Investors/investors";
import PlanYourTrip from "../../Components/PlanYourTrip/planyourtrip";

const mobileApp = () => {
  return (
    <div>
      <section className="bh__mobileapp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              {/* <h1>The best free trip planner app for travelers</h1>
            <p>The best free trip planner app for travelers</p> */}
              <div className="fw-700 fs-24">
                <span>The best free trip planner app for travelers</span>
              </div>
              <div className="pt-2 fs-18">
                <p>
                  Organize and map your itinerary in a mobile travel planner app
                  made for road trips and vacations.
                </p>
              </div>
              <div className="d-flex pt-2">
                <img className="h-40" src="img/AppBadge__ios.png" alt="" />
                <img className="h-40" src="img/AppBadge__android.png" alt="" />
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
            <div className="col-6">
              <div className="">
                <img
                  className="w-100"
                  src="img/telephoneLandingPageGetAppPromo__app.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__content__connection container-fixed-padding">
        <div className="container">
          <div className="position-relative">
            <img src="img/MobileLandingPage__plansWithYou.png" alt="" />
            <div className="plan__no__connection row col-4 offset-4 position-absolute t-0">
              <h2>Take your plans with you, even without a connection</h2>
              <p>
                With the Wanderlog mobile app, access and edit your trips
                wherever you go — even when you’re offline with no wifi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="travelers__evaluate container-fixed-padding">
        <div className="container">
          <TravelersComents />
          <FeaturesTools />
          <Investors />
          <PlanYourTrip />
        </div>
      </section>
    </div>
  );
};

export default mobileApp;
