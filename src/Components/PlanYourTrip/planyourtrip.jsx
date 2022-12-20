import React from "react";
import "./planyourtrip.css";
import { Link } from "react-router-dom";

const PlanYourTrip = () => {
  return (
    <>
      <div className="planyourtrip">
        <div className="container">
          <div className="title-plan-trip">
            <h2>Ready to plan your trip in half the time?</h2>
            <div className="d-flex justify-content-center pt-4 align-items-center box__reponsive__plan">
              <div className=" btn btn-start">
                <Link to="/createplan">Start planning</Link>
              </div>
              <div className=" btn btn-app">
                <button>Get the app</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanYourTrip;
