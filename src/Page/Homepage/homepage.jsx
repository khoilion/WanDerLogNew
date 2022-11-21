import LandingPageInner from "../../Components/LandingPageInner/landingpageinner";
import "./homepage.css";
import PlanYourTrip from "../../Components/PlanYourTrip/planyourtrip";
import Investors from "../../Components/Investors/investors";
import Destination from "../../Components/DestinationPage/destination";
import Planon from "../../Components/PlanOn/planon";
import Planlike from "../../Components/PlanLike/planlike";
import FeaturesTools from "../../Components/FeaturesTools/featurestools";
import TravelersComents from "../../Components/TravelersComents/travelerscoments";
import ItineraryMap from "../../Components/ItineraryMap/itinerarymap";
import { BiMessage } from "react-icons/bi";
import Banner from "../../Components/Banner/banner";
import { CgClose } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Homepage = () => {
  const [showMessager, setShowMessager] = useState(false);
  const hanDleChangeMessager = () => {
    setShowMessager(!showMessager);
  };
  return (
    <div>
      <div>
        <Banner />
        <ItineraryMap />
        <TravelersComents />
        <FeaturesTools />
        <Planlike />
        <Planon />
        <Destination />
        <Investors />
        <PlanYourTrip />
        <LandingPageInner />
      </div>
      {/* =============================Messager__fixed==================================== */}
      {showMessager ? (
        <div className="modal__messager">
          <div className="message-fixed-modal">
            <div className="bg-white border__radius__messager">
              <div className="bg__modal__messager padding__modal__messager">
                <div
                  onClick={hanDleChangeMessager}
                  className="icon__close__message"
                >
                  <CgClose />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      className="img__avt__project"
                      src="img/logo-white.png"
                      alt=""
                    />
                  </div>
                  <div className="ms-3">
                    <p className="">Thanks for planning with Wanderlog!</p>
                    <p className="">I'm Harry, a co-founder: how can I help?</p>
                  </div>
                </div>
                <div className="content__box__messager">
                  {" "}
                  {/*==========box__content__messager==========*/}
                  <div className="content_c21">
                    <p className="m-0">No conversation</p>
                  </div>
                  <div className="c21__body">
                    <img src="img/c21content-body.jpg" alt="" />
                    <button className="btn__c21__body">
                      <span>
                        <FaTelegramPlane />
                      </span>
                      <span className="ms-2"> New conversation </span>
                    </button>
                  </div>
                  <div className="c21__footer">
                    <p>Our team will reply within one business day</p>
                  </div>
                </div>
              </div>
              <div>
                <Link>
                  <img
                    className="img__footer"
                    src="img/tiledesk-logo_new_gray.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div onClick={hanDleChangeMessager} className="message-fixed">
        <div className="bg-232323">
          <div className="icon-message">
            <BiMessage className="icon-svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
