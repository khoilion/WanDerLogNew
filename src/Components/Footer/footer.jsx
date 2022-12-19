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
              <div className="col-sm-3 col-6 reponsive__footer__content">
                Made with{" "}
                <span>
                  <AiFillHeart />
                </span>{" "}
                in SF & more
                <br />© 2022 Travelchime Inc.
              </div>
              <div className="col-sm-4 col-6 reponsive__footer__content__1">
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
                    <Link
                      className="children-title-footer"
                      to="/travel-budget-expense-splitting-app"
                    >
                      Travel budgeting & cost tracking
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link
                      className="children-title-footer"
                      to="/embed-travel-map-on-blog"
                    >
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
              <div className="col-sm-3 col-6 reponsive__footer__content__2">
                <div className="mb-3 title-footer">Guides</div>
                <ul>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/tp">
                      Trip planners by destination
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/drive">
                      Road trips by destination
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/cat">
                      Distances between cities
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link
                      className="children-title-footer"
                      to="/SearchedCategories"
                    >
                      Popular search terms by destination
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/Countries">
                      Weather around the world
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/geo">
                      Travel questions & answers
                    </Link>
                  </li>
                  <li className="mb-3 footer__link">
                    <Link className="children-title-footer" to="/itinerary">
                      Travel itinerary guides
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2 col-6 reponsive__footer__content__3">
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
