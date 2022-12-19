import React from "react";
import "./featurestools.css";

const FeaturesTools = () => {
  return (
    <>
      <div className="size__FeaturesTools">
        <div className="container">
          <div className="text-center">
            <div>
              <h2 className="fw-700">
                Features to replace all your other tools
              </h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="row">
                  <div className="col-5 col-sm-12 ">
                    <img
                      className="w-100 img__reponsive"
                      src="img/MainFeatureTiles__addPlaces.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7 col-sm-12 text__st">
                    <h3 className="fs-22 letter-spacing-3 pt-3">
                      Add places from guides with 1 click
                    </h3>
                    <p className="letter-spacing-3 LandingPageFeatureTile__subheader pt-3">
                      We crawled the web so you don’t have to. Easily save
                      mentioned places.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="row">
                  <div className="col-5 col-sm-12 ">
                    <img
                      className="w-100 img__reponsive"
                      src="img/MainFeatureTiles__collaborate.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7 col-sm-12 text__st">
                    <h3 className="fs-22 letter-spacing-3 pt-3">
                      Collaborate with friends in real time
                    </h3>
                    <p className="letter-spacing-3 LandingPageFeatureTile__subheader pt-3">
                      Plan along with your friends with live syncing and
                      collaborative editing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="row">
                  <div className="col-5 col-sm-12">
                    <img
                      className="w-100 img__reponsive"
                      src="img/MainFeatureTiles__import.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7 col-sm-12 text__st">
                    <h3 className="fs-22 letter-spacing-3 pt-3">
                      Import flight and hotel reservations
                    </h3>
                    <p className="letter-spacing-3 LandingPageFeatureTile__subheader pt-3">
                      Connect or forward your emails to get them magically added
                      into your trip plan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="row">
                  <div className="col-5 col-sm-12">
                    <img
                      className="w-100 img__reponsive"
                      src="img/MainFeatureTiles__optimizeRoute.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7 col-sm-12 text__st">
                    <h3 className="fs-22 letter-spacing-3 pt-3">
                      Optimize your route
                    </h3>
                    <p className="letter-spacing-3 LandingPageFeatureTile__subheader pt-3">
                      Perfect for road trips and saving $$$ on gas! Get the best
                      route auto-rearranged.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="row">
                  <div className="col-5 col-sm-12">
                    <img
                      className="w-100 img__reponsive"
                      src="img/MainFeatureTiles__recommendations.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7 col-sm-12 text__st">
                    <h3 className="fs-22 letter-spacing-3 pt-3">
                      Get personalized suggestions
                    </h3>
                    <p className="letter-spacing-3 LandingPageFeatureTile__subheader pt-3">
                      Find the best places to visit with smart recommendations
                      based on your itinerary.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="row">
                  <div className="col-5 col-sm-12">
                    <img
                      className="w-100 img__reponsive"
                      src="img/MainFeatureTiles__export.png"
                      alt=""
                    />
                  </div>
                  <div className="col-7 col-sm-12 text__st">
                    <h3 className="fs-22 letter-spacing-3 pt-3">
                      Export your places to Google Maps
                    </h3>
                    <p className="letter-spacing-3 LandingPageFeatureTile__subheader pt-3">
                      Synced automatically, for when plans change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesTools;
