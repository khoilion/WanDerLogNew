import React from "react";
import "./investors.css";
import { Link } from "react-router-dom";

const Investors = () => {
  return (
    <div className="investors">
      <div className="container">
        <div className="row align-items-center line-investors justify-content-center">
          <div className="col-3 box__reponsive__investors">
            <div className="text-investors">
              <div className="bg-before position-relative bg-before-reponsive">
                <cite>From the creators of</cite>
              </div>
              <Link
                className="d-flex justify-content-center align-items-center"
                to="/"
              >
                <img
                  className="img-investors"
                  src="img/bookWithMatrixIcon.png"
                  alt=""
                />
                <div>BookWithMatrix</div>
              </Link>
            </div>
          </div>
          <div className="col-9">
            <div className="row align-items-center">
              <div className="bg-before position-relative bg-before-reponsive">
                <cite>As featured in</cite>
              </div>
              <div className="col-3">
                <Link to="/">
                  <img
                    className="w-100 h__50"
                    src="img/Traveling_Lifestyle_15d5630e7c.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-3">
                <Link to="/">
                  <img
                    className="w-100 h__50"
                    src="img/Lifehacker_cea733095f.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-3">
                <Link to="/">
                  <img
                    className="w-100 h__50"
                    src="img/20210528_travel_And_Destinations_Logo_5559778d5e.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-3">
                <Link to="/">
                  <img
                    className="w-100 h__50"
                    src="img/Wanderlust_Marriage_Travel_d29c9b161c.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
