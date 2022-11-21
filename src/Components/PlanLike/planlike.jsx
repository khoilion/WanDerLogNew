import React from "react";
import "./planlike.css";
import { Link } from "react-router-dom";

const Planlike = () => {
  return (
    <>
      <div className="size__planlike">
        <div className="container">
          <div className="text-center">
            <h2 className="fs-36 fw-700">Plan like a Pro</h2>
            <div className="LandingPageSectionSubheading mb-5">
              <span>
                Unlock premium features like offline access, unlimited
                attachments, flight deals, export to Google maps, and
              </span>
              <Link to="/"> much more</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <img
                className="w-100"
                src="img/LandingPageProFeatureTiles__offline-1.png"
                alt=""
              />
              <h3 className="pt-3 fs-22 fw-700 letter-spacing-3">
                Offline access
              </h3>
              <p className="fs-16 letter-spacing-3">
                No wifi, no problem. Your trip plans are locally downloaded for
                access anywhere.
              </p>
            </div>
            <div className="col-4 text-center">
              <img
                className="w-100"
                src="img/LandingPageProFeatureTiles__attachments-2.png"
                alt=""
              />
              <h3 className="pt-3 fs-22 fw-700 letter-spacing-3">
                Unlimited attachments
              </h3>
              <p className="fs-16 letter-spacing-3">
                Never dig through your emails again — access all your trip files
                and PDFs in one place.
              </p>
            </div>
            <div className="col-4 text-center">
              <img
                className="w-100"
                src="img/LandingPageProFeatureTiles__optimize-3.png"
                alt=""
              />
              <h3 className="pt-3 fs-22 fw-700 letter-spacing-3">
                Optimize your route
              </h3>
              <p className="fs-16 letter-spacing-3">
                Perfect for road trips and saving $$$ on gas! Get the best route
                auto-rearranged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planlike;
