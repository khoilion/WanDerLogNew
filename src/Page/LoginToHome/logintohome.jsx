import React from "react";
import "./logintohome.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import { FaBed } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import CpmRecent from "../Guides/CpnBoxRecentGuides/cpmrecent";

const { RangePicker } = DatePicker;

const Logintohome = () => {
  const [showModalBookRoom, setShowModalBookRoom] = useState(false); // tạo state để show modal
  const handleChangeModalBookRoom = () => {
    // tạo hàm để thay đổi state
    setShowModalBookRoom(!showModalBookRoom); // thay đổi state
  };

  const [showDropdownYourGuides, setshowDropdownYourGuides] = useState(false);
  const handlChangeDropdownYourGuides = () => {
    setshowDropdownYourGuides(!showDropdownYourGuides);
  };

  const [count, setCount] = useState(1); // khởi tạo giá trị ban đầu cho count
  const increment = () => {
    // hàm tăng count
    setCount((count) => count + 1); // gọi hàm setCount để cập nhật giá trị mới cho count
  };
  const decrement = () => {
    setCount((count) => count - 1); // gọi hàm setCount để cập nhật giá trị mới cho count
  }; // hàm giảm count

  const [count1, setCount1] = useState(1); // khởi tạo giá trị ban đầu cho count
  const increment1 = () => {
    // hàm tăng count
    setCount1((count1) => count1 + 1); // gọi hàm setCount để cập nhật giá trị mới cho count
  };
  const decrement1 = () => {
    setCount1((count1) => count1 - 1); // gọi hàm setCount để cập nhật giá trị mới cho count
  }; // hàm giảm count

  const [count2, setCount2] = useState(0); // khởi tạo giá trị ban đầu cho count
  const increment2 = () => {
    // hàm tăng count
    setCount2((count2) => count2 + 1); // gọi hàm setCount để cập nhật giá trị mới cho count
  };
  const decrement2 = () => {
    setCount2((count2) => count2 - 1); // gọi hàm setCount để cập nhật giá trị mới cho count
  }; // hàm giảm count

  return (
    <div className="home___login">
      <section className="container">
        <div className="row d-flex align-items-center justify-content-between pt-3 pb-3">
          <div className="col-md-10">
            <h1>Recently viewed and upcoming</h1>
          </div>
          <div className=" btn-start col-md-2">
            <Link
              to="/createplan"
              className="d-flex align-items-center justify-content-center"
            >
              <div>Plan new trip</div>
            </Link>
          </div>
        </div>
        <div className="img__box__logintohome w-25 mt-5 mb-5">
          <img src="img/img_focus.jpg" alt="" />
          <p>Spain Guide</p>
          <div className="d-flex">
            <div className="d-flex align-items-center me-4">
              <div>
                <AiOutlineHeart />
              </div>
              <div className="ms-2">0</div>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <AiOutlineEye />
              </div>
              <div className="ms-2">1</div>
            </div>
          </div>
        </div>
      </section>
      <section className="home__page__inner">
        <div className="container">
          <div className="row">
            <div className="col-8 reponsive__logintohome">
              <div className="text__content__homeinner">
                Need a place to stay?
              </div>
              <div className="row align-items-center">
                <div className="col-4">
                  <div className="field field_v1 bg-white">
                    <label className="ha-screen-reader">Where</label>
                    <input
                      id="first-name"
                      className="field__input"
                      placeholder="City you're visiting"
                    />
                    <span className="field__label-wrap" aria-hidden="true">
                      <span className="field__label">Where to ?</span>
                    </span>
                  </div>
                </div>
                <div className="col-3">
                  <RangePicker
                    renderExtraFooter={() => "extra footer"}
                    showTime
                  />
                </div>
                <div className="col-2 position-relative">
                  <button
                    onClick={handleChangeModalBookRoom}
                    className="book__room"
                  >
                    <div className="fs-14 fw-700">Room,guests</div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <FaBed />
                        </div>
                        <div className="ps-2">1</div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <BsFillPeopleFill />
                        </div>
                        <div className="ps-2">1</div>
                      </div>
                    </div>
                  </button>
                  {showModalBookRoom ? (
                    <button className="modal__bookroom position-absolute">
                      <div className="fs-16 fw-700 text-start mb-3">
                        Rooms and guests
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <span>
                            <FaBed />
                          </span>
                          <span className="ps-2">Room</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <button
                            disabled={count === 1}
                            onClick={decrement}
                            className="btn__elm__booking"
                          >
                            <HiMinus />
                          </button>
                          <div className="btn__content__booking">{count}</div>
                          <button
                            onClick={increment}
                            className="btn__elm__booking"
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-2">
                        <div>
                          <span>
                            <BsFillPeopleFill />
                          </span>
                          <span className="ps-2">Adults</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <button
                            disabled={count1 === 1}
                            onClick={decrement1}
                            className="btn__elm__booking"
                          >
                            <HiMinus />
                          </button>
                          <div className="btn__content__booking">{count1}</div>
                          <button
                            onClick={increment1}
                            className="btn__elm__booking"
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-2">
                        <div>
                          <span>
                            <FaChild />
                          </span>
                          <span className="ps-2">Children</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <button
                            disabled={count2 === 0}
                            onClick={decrement2}
                            className="btn__elm__booking"
                          >
                            <HiMinus />
                          </button>
                          <div className="btn__content__booking">{count2}</div>
                          <button
                            onClick={increment2}
                            className="btn__elm__booking"
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <div>
                          <button
                            onClick={handleChangeModalBookRoom}
                            className="me-3 button__cancel__save button__flat__secondary"
                          >
                            Cancel
                          </button>
                        </div>
                        <div>
                          <button className="button__cancel__save button__brand">
                            Save
                          </button>
                        </div>
                      </div>
                    </button>
                  ) : null}
                </div>
                <div className="col-3">
                  <button className=" btn__search__booking">
                    Search for bookings
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 text-end">
              <img
                className="hotebooking"
                src="img/HotelBookingView__image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <iframe
          title="map"
          className="mt-5 mt-5 mb-5 iframe__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.98839009503!2d105.8194540736697!3d21.022738704089598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1670213209005!5m2!1svi!2s"
          loading="lazy"
        />
      </section>
      <section className="container">
        <div className="row mt-5 mb-5">
          <div className="col-6 reponsive__box__mobileapp">
            <div className="HomePageInner__yourTripsAndGuides">
              <div className="d-flex justify-content-between mb-4">
                <div className="fs-24 fw-700">Your trips</div>
                <div>
                  <Link to="/createplan">
                    <button className="btn__elm__plan">
                      <BsPlusLg className="me-2" />
                      Plan new trip
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                You don’t have any trip plans yet.{" "}
                <Link to="/createplan" className="text-brand">
                  Plan a new trip.
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6 reponsive__box__mobileapp">
            <div className="HomePageInner__yourTripsAndGuides">
              <div className="d-flex justify-content-between mb-4">
                <div className="fs-24 fw-700">Your guides</div>
                <div>
                  <Link to="/recommendations">
                    <button className="btn__elm__plan">
                      <BsPlusLg className="me-2" />
                      Create new guide
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-10 ">
                  <div>
                    <Link
                      className="d-flex align-items-center text-dark fw-700"
                      to="/"
                    >
                      <div>
                        <img
                          className="border-radius-elm-12"
                          src="img/img-plan.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ms-3">
                        <div className="mb-2">Spain Guide</div>
                        <div className="d-flex">
                          <div>
                            <span>
                              <AiOutlineHeart />
                            </span>
                            <span className="ms-2">0</span>
                          </div>
                          <div className="ps-3">
                            <span>
                              <FiEye />
                            </span>
                            <span className="ms-2">2</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-2">
                  <div className="text-end see__more position-relative">
                    <FiMoreHorizontal onClick={handlChangeDropdownYourGuides} />
                    {showDropdownYourGuides ? (
                      <div className="position-absolute bg-white btn__more">
                        <div className="d-flex align-items-center ps-4 pe-4 pt-2 pb-2  menu__item__guides">
                          <div>
                            <AiOutlineDelete />
                          </div>
                          <div className="fw-600 fs-16 ms-4">Delete</div>
                        </div>
                        <div className="d-flex align-items-center ps-4 pe-4 pt-2 pb-2 menu__item__guides">
                          <div>
                            <IoMdShareAlt />
                          </div>
                          <div className="fw-600 fs-16 ms-4">Share</div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="fw-700 fs-36 mb-4">Explore</div>
        <div className="fs-24 fw-700 mb-3">Popular destinations</div>
        <div className="d-flex mb-4">
          <CpmRecent />
        </div>
      </section>
    </div>
  );
};

export default Logintohome;
