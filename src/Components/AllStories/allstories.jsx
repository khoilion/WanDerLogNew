import React from "react";
import "./allstories.css";
import { Link } from "react-router-dom";
import {RiBookReadLine} from "react-icons/ri";

const AllStories = () => {
  return (
    <>
      <div>
        <Link to="/">
          <img className="w-100" src="img/imgboxcontent.jpg" alt="" />
        </Link>
        <div className="card-block">
          <h2 className="card-title">
            <Link to="/">The 8 Best Travel Budgeting Tools of 2022</Link>
          </h2>
          <p className="card-text d-block">
            When planning a trip, most travelers have a set budget for
            everything from accommodation and flights to dining and activities.
            However, many travelers don’t...
          </p>
          <div className="metafooter">
            <div className="wrapfooter">
              <div className="d-flex justify-content-around">
                <div className="meta-footer-thumb">
                  <img src="img/wrapfooteravata.png" alt="" />
                </div>
                <div className="ps-3">
                  <div className="post-name">
                    <Link to="/">Alice Sewell</Link>
                  </div>
                  <div>
                    <span className="post-date">Aug 2, 2022</span>
                    <span className="dot">.</span>
                    <span className="readingtime">11 min read</span>
                  </div>
                </div>
                <div>
                    <RiBookReadLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllStories;
