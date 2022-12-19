import React from "react";
import "./itinerarymap.css";

const ItineraryMap = () => {
  return (
    <div className="itinerarymap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 px-4 ">
            <img className="w-100" src="img/LandingPageMapAnimation__map.png" alt="" />
          </div>
          <div className="col-md-5">
            <div className="text__content__itinerary">
              <h2 className="fw-700">
                Your itinerary and your map in one view
              </h2>
              <p className="fs-16 LandingPageSectionSubheading">
                No more switching between different apps, tabs, and tools to
                keep track of your travel plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryMap;
