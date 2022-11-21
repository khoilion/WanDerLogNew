import React from "react";
import "./destination.css";
import { Link } from "react-router-dom";

const Destination = () => {
  return (
    <div className="destination-page">
      <div className="container">
        <div className="content-text-destination">
          <h2>Discover your next favorite destination</h2>
          <div className="text-destination">
            <span>
              Get inspired from guides around the world — with expert tips and
              recommendations from the Wanderlog community.
            </span>
            <Link to="/guides">See all Wanderlog travel guides.</Link>
          </div>
        </div>
      </div>
      <div className="bg-box-destination">
        <div className="container text-center">
          <div className="row">
            <div className="col-3">
              <div className="position-relative overflow-hidden hover-room-image boder-radius-12">
                <img
                  className="img__slideShow"
                  src="img/img-slideShow-1.jpg"
                  alt=""
                />
                <div className="text-white p-3 position-absolute account__slideShow text-start ">
                  <span className="fs-24 fw-700 letter-spacing-3">San Francisco Neighborhood Guide</span>
                  <div className="d-flex align-items-center">
                    <div>
                        <img className="bubble__size__sm me-2" src="img/avt-slideShow.jpg" alt="" />
                    </div>
                    <div className="text-start">
                        <span className="fw-700 letter-spacing-3">Oliver Manheim</span>
                        <br />
                        <span className="letter-spacing-3 fw-600">27161 views • 109 likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="position-relative overflow-hidden hover-room-image boder-radius-12">
                <img
                  className="img__slideShow"
                  src="img/img-slideShow-1.jpg"
                  alt=""
                />
                <div className="text-white p-3 position-absolute account__slideShow text-start ">
                  <span className="fs-24 fw-700 letter-spacing-3">San Francisco Neighborhood Guide</span>
                  <div className="d-flex align-items-center">
                    <div>
                        <img className="bubble__size__sm me-2" src="img/avt-slideShow.jpg" alt="" />
                    </div>
                    <div className="text-start">
                        <span className="fw-700 letter-spacing-3">Oliver Manheim</span>
                        <br />
                        <span className="letter-spacing-3 fw-600">27161 views • 109 likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="position-relative overflow-hidden hover-room-image boder-radius-12">
                <img
                  className="img__slideShow"
                  src="img/img-slideShow-1.jpg"
                  alt=""
                />
                <div className="text-white p-3 position-absolute account__slideShow text-start ">
                  <span className="fs-24 fw-700 letter-spacing-3">San Francisco Neighborhood Guide</span>
                  <div className="d-flex align-items-center">
                    <div>
                        <img className="bubble__size__sm me-2" src="img/avt-slideShow.jpg" alt="" />
                    </div>
                    <div className="text-start">
                        <span className="fw-700 letter-spacing-3">Oliver Manheim</span>
                        <br />
                        <span className="letter-spacing-3 fw-600">27161 views • 109 likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="position-relative overflow-hidden hover-room-image boder-radius-12">
                <img
                  className="img__slideShow"
                  src="img/img-slideShow-1.jpg"
                  alt=""
                />
                <div className="text-white p-3 position-absolute account__slideShow text-start ">
                  <span className="fs-24 fw-700 letter-spacing-3">San Francisco Neighborhood Guide</span>
                  <div className="d-flex align-items-center">
                    <div>
                        <img className="bubble__size__sm me-2" src="img/avt-slideShow.jpg" alt="" />
                    </div>
                    <div className="text-start">
                        <span className="fw-700 letter-spacing-3">Oliver Manheim</span>
                        <br />
                        <span className="letter-spacing-3 fw-600">27161 views • 109 likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="destination-page__guidesCaption">
            Have tips of your own? Write a guide to share with other travelers
            like you!
          </p>
          <button className="own__guide">
            <Link to="/recommendations">Write your own guide</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
