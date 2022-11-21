import React from "react";
import "./guides.css"; // <--- import the css file
import { ImSearch } from "react-icons/im"; // <--- import the icon'
import { Link } from "react-router-dom";
import CpmRecent from "./CpnBoxRecentGuides/cpmrecent";

const Guides = () => {
  return (
    <>
      <section className="container text-center pt-5 pb-4">
        <h1 className="letter-spacing-3 fw-700">
          Explore travel guides and itineraries
        </h1>
        <div className="input-group input-group-lg w-50 btn__search mt-4">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            <ImSearch />
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="Search for a destination"
          />
        </div>
        <div className="text-muted mt-2 text-center">
          Or browse our most popular destinations:
        </div>
        <div className="mt-2">
          <span className="d-inline-block ms-2 mt-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2">
            <Link className="btn__city Button__md Button__light-gray">
              Scotland
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2">
            <Link className="btn__city Button__md Button__light-gray">
              See more…
            </Link>
          </span>
        </div>
      </section>
      <section className="recent__guides pt-5 pb-4">
        <div className="container">
          <div className="mb-2">
            <h2 className="fw-700 letter-spacing-3 fs-24 mb-3 line-height-1">
              Recent guides
            </h2>
            <div className="row">
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
              <CpmRecent />
            </div>
            <div className="mt-4 text-center">
              <button className="btn__seemore">See more</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-5">
          <h2 className="fw-700 mb-3 line-height-1 letter-spacing-3 fs-24">Or browse our destinations with the most guides</h2>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
          <span className="d-inline-block ms-2 mt-2 mb-2">
            <Link className="btn__city Button__md Button__light-gray">
              San Francisco
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};

export default Guides;
