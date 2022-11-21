import React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./travelerscoments.css";

export default function Responsive() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider ">
      <div className="container text-center">
        <h2 className="fw-700 letter-spacing-3">
          {" "}
          What travelers are raving about{" "}
        </h2>
        <Slider {...settings}>
          <div className="text-start fs-16 color-elm">
            <div className="LandingPageReview__gray">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <p className="text-start fs-16 color-elm">
                  So much easier to visualize and plan a road trip to my
                  favourite rock climbing destinations and explore the area
                  around.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 img-avt-cmt">
                  <img
                    src="img/Couple_Travel_The_World_8cd99ff8e1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start fs-16 color-elm">
                  <div className="fs-16">Lydia Yang, Founder</div>
                  <Link to="/">Kelvin S.</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start fs-16 color-elm">
            <div className="LandingPageReview__gray">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <p className="text-start fs-16 color-elm">
                  So much easier to visualize and plan a road trip to my
                  favourite rock climbing destinations and explore the area
                  around.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 img-avt-cmt ">
                  <img
                    src="img/Couple_Travel_The_World_8cd99ff8e1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start fs-16 color-elm">
                  <div className="fs-16">Lydia Yang, Founder</div>
                  <Link to="/">Kelvin S.</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start ">
            <div className="LandingPageReview__gray">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <p className="text-start fs-16 color-elm">
                  So much easier to visualize and plan a road trip to my
                  favourite rock climbing destinations and explore the area
                  around.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 img-avt-cmt">
                  <img
                    src="img/Couple_Travel_The_World_8cd99ff8e1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start fs-16 color-elm">
                  <div className="fs-16">Lydia Yang, Founder</div>
                  <Link to="/">Kelvin S.</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start ">
            <div className="LandingPageReview__gray">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <p className="text-start fs-16 color-elm">
                  So much easier to visualize and plan a road trip to my
                  favourite rock climbing destinations and explore the area
                  around.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 img-avt-cmt">
                  <img
                    src="img/Couple_Travel_The_World_8cd99ff8e1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start fs-16 color-elm">
                  <div className="fs-16">Lydia Yang, Founder</div>
                  <Link to="/">Kelvin S.</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start ">
            <div className="LandingPageReview__gray">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <p className="text-start fs-16 color-elm">
                  So much easier to visualize and plan a road trip to my
                  favourite rock climbing destinations and explore the area
                  around.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 img-avt-cmt">
                  <img
                    src="img/Couple_Travel_The_World_8cd99ff8e1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start fs-16 color-elm">
                  <div className="fs-16">Lydia Yang, Founder</div>
                  <Link to="/">Kelvin S.</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start ">
            <div className="LandingPageReview__gray">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <p className="text-start fs-16 color-elm">
                  So much easier to visualize and plan a road trip to my
                  favourite rock climbing destinations and explore the area
                  around.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 img-avt-cmt">
                  <img
                    src="img/Couple_Travel_The_World_8cd99ff8e1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start fs-16 color-elm">
                  <div className="fs-16">Lydia Yang, Founder</div>
                  <Link to="/">Kelvin S.</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start ">
            <div className="LandingPageReview__gray">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <p className="text-start fs-16 color-elm">
                  So much easier to visualize and plan a road trip to my
                  favourite rock climbing destinations and explore the area
                  around.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 img-avt-cmt">
                  <img
                    src="img/Couple_Travel_The_World_8cd99ff8e1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start fs-16 color-elm">
                  <div className="fs-16">Lydia Yang, Founder</div>
                  <Link to="/">Kelvin S.</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start ">
            <div className="LandingPageReview__gray">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <p className="text-start fs-16 color-elm">
                  So much easier to visualize and plan a road trip to my
                  favourite rock climbing destinations and explore the area
                  around.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 img-avt-cmt">
                  <img
                    src="img/Couple_Travel_The_World_8cd99ff8e1.jpg"
                    alt=""
                  />
                </div>
                <div className="text-start fs-16 color-elm">
                  <div className="fs-16">Lydia Yang, Founder</div>
                  <Link to="/">Kelvin S.</Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
