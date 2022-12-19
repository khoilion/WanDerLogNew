import React from "react";
import "./landingpageinner.css";
import { Link } from "react-router-dom";

const LandingPageInner = () => {
  return (
    <>
      <div id="landinginner">
        <div className="container">
          <h2 className="text-center content-title-landing mb-3">
            For every kind of trip and
            <Link className="destination" to="/tp">
              {" "}
              every destination
            </Link>
          </h2>
          <div className="text-center text-muted">
            Wanderlog is the best free planning app for any trip you might have
            in mind. It's:
          </div>
          <div className="line-landing">
            <div className="row py-5">
              <div className="col-4">
                <h3 className="planner mb-3">
                  The best
                  <Link className="destination" to="/drive">
                    {" "}
                    road trip{" "}
                  </Link>
                  planner
                </h3>
                <div className="text-muted">
                  Use Wanderlog as a route map showing directions, distances,
                  and driving times between different attractions you might want
                  to visit.
                </div>
              </div>
              <div className="col-4">
                <h3 className="planner mb-3">The best vacation planner</h3>
                <div className="text-muted">
                  Use Wanderlog to map your journey to figure out the best
                  routes, keep track of hotel and flight bookings and
                  reservations, and read guides from other trip planning
                  websites.
                </div>
              </div>
              <div className="col-4">
                <h3 className="planner mb-3">
                  The best group itinerary planner
                </h3>
                <div className="text-muted">
                  Use Wanderlog to share your itinerary with tripmates, friends,
                  and families and collaborate in real time, so everyone stays
                  in the loop.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageInner;
