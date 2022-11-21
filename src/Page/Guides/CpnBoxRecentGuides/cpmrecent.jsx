import React from "react"; // <--- import the react library
import "./cpmrecent.css"; // <--- import the css file
import { Link } from "react-router-dom"; // <--- import the react-router-dom library
import { MdVerified } from "react-icons/md"; // <--- import the icon
import { AiOutlineHeart } from "react-icons/ai"; // <--- import the icon
import { AiOutlineEye } from "react-icons/ai";
import { CgMoreO } from "react-icons/cg"; // <--- import the icon

const CpmRecent = () => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-5">
        <div className="card__">
          <div className="card__img">
            {/* <div className="more">
                <CgMoreO />
            </div> */}
            <Link className="d-block overflow-hidden border__radius__8">
              <img
                className="box__img w-100 "
                src="img/img-guines.jpg"
                alt=""
              />
            </Link>
            <div className="d-flex mt-2 mb-2">
              <Link className="text-ellipsis card__title">
                Ultimate San Francisco Guide: Stuff To Do and Things to Eat
              </Link>
              <div className="color__elm">
                <MdVerified />
              </div>
            </div>
            <div className="text-muted text-ellipsis-2 ">
              Tips from a local! I grew up in the bay area and lived in San
              Francisco for over 12+ years. I've been to almost every "hot"
              place and narrowed down the ones worth stopping by. Check out more
              of my adventures on IG @navnomadic
            </div>
            <div className="mt-3 d-flex align-items-center justify-content-between">
              <div>
                <Link className="d-flex align-items-center">
                  <img
                    className="Bubble__size__sm"
                    src="img/avt-name-link.jpg"
                    alt=""
                  />
                  <div className="mx-2 text-ellipsis text-dark">
                    Namphuong Van Kam
                  </div>
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center ms-2">
                  <AiOutlineHeart />
                  <div className=" fw-700">25</div>
                </div>
                <div className="d-flex align-items-center ms-2">
                  <AiOutlineEye />
                  <div className=" fw-700">1234</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CpmRecent;
