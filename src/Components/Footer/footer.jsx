import React, { useState } from "react";
import "./footer.css";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  const [contactus, setContacus] = useState(false);
  const handleChangeClickContactUs = () => {
    setContacus(!contactus);
  };
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="mg-footer">
            <div className="row">
              <div className="col-3">
                Made with{" "}
                <span>
                  <AiFillHeart />
                </span>{" "}
                in SF & more
                <br />© 2022 Travelchime Inc.
              </div>
              <div className="col-4">
                <div className="mb-3 title-footer">Wanderlog</div>
                <ul>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/security">
                      Report security issue
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/terms">
                      Terms of use
                    </Link>{" "}
                    &
                    <Link className="children-title-footer" to="/privacy">
                      {" "}
                      Privacy policy
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/mobileApp">
                      Mobile app
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/extension">
                      Browser extension
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/">
                      Travel budgeting & cost tracking
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/embed-travel-map-on-blog">
                      How to embed a map on your travel blog
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/jobs">
                      Jobs
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    {contactus ? (
                      <p>admin@wanderlog.com</p>
                    ) : (
                      <Link
                        onClick={handleChangeClickContactUs}
                        className="children-title-footer"
                        to=""
                      >
                        Contact us
                      </Link>
                    )}
                  </li>
                  <li className="mb-3 footer__link">
                    <Link
                      className="children-title-footer"
                      to="/google-disclosure"
                    >
                      Google data disclosure
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <div className="mb-3 title-footer">Guides</div>
                <ul>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/">
                      Trip planners by destination
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/">
                      Road trips by destination
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/">
                      Distances between cities
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/">
                      Popular search terms by destination
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/">
                      Weather around the world
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/">
                      Travel questions & answers
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/">
                      Travel itinerary guides
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-2">
                <div className="mb-3 title-footer">Get the app</div>
                <ul>
                  <li>
                    <Link to="/">
                      <img
                        className="w-100 mb-3"
                        src="img/AppBadge__ios.png"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img
                        className="w-100 mb-3"
                        src="img/AppBadge__android.png"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
