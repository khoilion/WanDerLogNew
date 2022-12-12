import React from "react";
import "./blog.css";
import AllStories from "../../Components/AllStories/allstories";
import { Pagination } from "antd";

const Blog = () => {
  const showTotal = (total) => `Total ${total} items`;

  return (
    <div className="site-content">
      <div className="container">
        <div className="section-title">
          <h2>
            <span>All Stories</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 grid-item">
            <div className="bg-white mt-4">
              <AllStories />
            </div>
          </div>
          <div className="mt-4 text-center mb-4">
            <Pagination size="small" total={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
