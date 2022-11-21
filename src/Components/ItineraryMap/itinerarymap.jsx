import React from "react";
import "./itinerarymap.css";

const ItineraryMap = () => {
  return (
    <div className="itinerarymap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <img src="img/LandingPageMapAnimation__map.png" alt="" />
          </div>
          <div className="col-6">
            <div className="me-5 pe-5">
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
