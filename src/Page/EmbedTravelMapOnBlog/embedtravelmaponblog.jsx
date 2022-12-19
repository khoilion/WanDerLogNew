import React from "react";
import "./embedtravelmaponblog.css";
import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import TravelersComents from "../../Components/TravelersComents/travelerscoments";

const EmbedTravelMapOnBlog = () => {
  return (
    <>
      <div>
        <section className="bg__banner__content LandingPageSection">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <h1>Build custom maps for your travel guide</h1>
                <p>
                  Embed a free map in your article or blog post to help readers
                  and improve rankings
                </p>
                <Link className="btn__banner">Start building a map</Link>
              </div>
              <div className="col-7 img___banner">
                <img
                  className="w-100"
                  src="img/MapEmbedLandingPageInner__heroImage.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="LandingPageSection">
          <div className="container">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-6">
                <h2 className="text-center">Why embed our maps?</h2>
                <p className="text-center">
                  Our maps help your guide rank higher on Google and be more
                  useful to readers.
                </p>
                <div className="row pt-3 text-center">
                  <div className="col-6 ">
                    <FaChartLine className="size__icon" />
                    <div>
                      Maps keep readers engaged and on the page, lowering your
                      bounce rate (used by Google for ranking purposes)
                    </div>
                  </div>
                  <div className="col-6">
                    <FaTachometerAlt className="size__icon" />
                    <div>
                      Our maps are lightning fast: they take 75% less bandwidth
                      than Google My Maps, a common alternative, and keep your
                      site's PageSpeed high.
                    </div>
                    <div className="mt-2 text-muted small">
                      Compare <Link to="/">Wanderlog</Link> and{" "}
                      <Link to="/">Google Maps</Link> with Google PageSpeed
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </section>
        <section className="LandingPageSection">
          <div className="container text-center">
            <h2>
              As seen on these blogs and
              <Link>100s more</Link>
            </h2>
            <div className="row">
              <div className="col-3">
                <Link to="">
                  <img src="img/Jasmine_Alley_8442c4c547.png" alt="" />
                </Link>
              </div>
              <div className="col-3">
                <Link to="">
                  <img src="img/The_Kittchen_c10c21529e.png" alt="" />
                </Link>
              </div>
              <div className="col-3">
                <Link to="">
                  <img
                    src="img/Where_Are_Those_Morgans_4da3369845.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="col-3">
                <Link to="">
                  <img
                    src="img/20210628_the_Travel_Blogs_Logo_277029c01b.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="LandingPageSection">
          <div className="container">
            <div>
              <h2 className="text-center">What bloggers are saying</h2>
            </div>
            <TravelersComents />
          </div>
        </section>
      </div>
    </>
  );
};

export default EmbedTravelMapOnBlog;
