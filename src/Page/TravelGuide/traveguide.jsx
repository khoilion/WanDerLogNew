import React from "react";
import "./traveguide.css";
import { Link } from "react-router-dom";

const TravelGuide = () => {
  return (
    <>
      <div className="container">
        <div className="text-center pt-5 pb-5 mt-5 mb-5">
          <h1 className="fs-36 fw-700 letter-spacing-3">Write a travel guide</h1>
          <p className="text-muted">
            Help fellow travelers by writing up your tips or a past itinerary.
          </p>
          <div class="page">
            <div class="field field_v1 field_v2">
              <label for="first-name" class="ha-screen-reader">
                Where to ?
              </label>
              <input
                id="first-name"
                class="field__input"
                placeholder="e.g. Paris, Hawaii, Japan"
              />
              <span class="field__label-wrap" aria-hidden="true">
                <span class="field__label">Where to ?</span>
              </span>
            </div>
          </div>
          <div className=" btn btn-start pt-4">
            <Link to="#">Start writing</Link>
          </div>
          <div class="pt-4 fw-700 small text-danger pl-1 mt-1 ">
            <Link to="/CreatePlan" className="TripOrGuideForm__altType">
              Or start planning a trip
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelGuide;
