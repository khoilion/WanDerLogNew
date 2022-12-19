import React from "react";
import "./extension.css";
import { Link } from "react-router-dom";
import ItineraryMap from "../ItineraryMap/itinerarymap";
import FeaturesTools from "../FeaturesTools/featurestools";

const Extension = () => {
  return (
    <div id="extension">
      <section className="banner__extension text-center">
        <div className="container">
          <h1>Save on travel expenses with the Wanderlog Chrome extension</h1>
          <p>
            One extension, multiple ways to save. Compare better pricing options
            on Google Flights and Airbnb.
          </p>
          <button className="my-4 dowload__extension">
            Download free extension
          </button>
        </div>
      </section>
      <section className="extensionLandingPage__container">
        <div className="container">
          <div className="row justify-content-between mb-5 pb-5">
            <div className="col-lg-4 order-lg-1 mt-4 align-self-end">
              <h2 className="">
                See Southwest prices on Google Flights results
              </h2>
              <ol>
                <li>
                  Install our <Link to="/">Chrome extension.</Link>
                </li>
                <li>Visit Google Flights and search where you're going.</li>
                <li>
                  Wanderlog will automatically pull the results from Southwest
                  so you can compare prices in one place.
                </li>
              </ol>
            </div>
            <div className="col-lg-7 order-lg-2">
              <img
                className="img-fluid"
                src="img/ExtensionLandingPageFeatureSection__southwestScreenshot.png"
                alt=""
              />
            </div>
          </div>
          <div className="row justify-content-between mb-5 pb-5">
            <div className="col-lg-4 order-lg-1 mt-4 align-self-end">
              <h2 className="">Get the total cost on Airbnb’s map view</h2>
              <ol>
                <li>
                  Install our <Link to="/">Chrome extension.</Link>
                </li>
                <li>Visit Google Flights and search where you're going.</li>
                <li>
                  Wanderlog will automatically pull the results from Southwest
                  so you can compare prices in one place.
                </li>
              </ol>
            </div>
            <div className="col-lg-7 order-lg-2">
              <img
                className="img-fluid"
                src="img/ExtensionLandingPageFeatureSection__airbnbScreenshot.png"
                alt=""
              />
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section>
        <ItineraryMap />
      </section>
      <section>
        <FeaturesTools />
      </section>
      <section>
        <div className="container mb-5 pb-5">
          <h2 className="text-center LandingPageSectionHeading">
            Ready to streamline your travel planning?
          </h2>
          <div className="text-center">
            <button className="btn___elm btn___download">
              Download extension
            </button>
            <button className="btn___elm btn___planner">
              Try our trip planner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extension;
