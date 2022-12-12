import React from "react";
import "./createplan.css";
import { BsPlus } from "react-icons/bs";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

const { RangePicker } = DatePicker;
const CreatePlan = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="createplan">
              <h1>Plan a new trip</h1>
              <div>
                <div>
                  <div className="page">
                    <div className="field field_v1">
                      <label for="first-name" className="ha-screen-reader">
                        Where to ?
                      </label>
                      <input
                        id="first-name"
                        className="field__input"
                        placeholder="e.g. Paris, Hawaii, Japan"
                      />
                      <span className="field__label-wrap" aria-hidden="true">
                        <span className="field__label">Where to ?</span>
                      </span>
                    </div>
                  </div>
                  {/* <div className="mb-3 small text-danger pl-1 mt-1">
                    Choose a destination to start planning
                  </div> */}
                  <Space direction="vertical" size={12}>
                    <RangePicker />
                  </Space>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <button className="align-items-center d-flex btn__plan__create mt-3">
                        <div className="me-2">
                          <BsPlus />
                        </div>
                        <div>Invite tripmates</div>
                      </button>
                    </div>
                    <div>
                      <select
                        className="mt-3 form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Private</option>
                        <option value="2">Public</option>
                        <option value="3">Friends</option>
                      </select>
                    </div>
                  </div>
                  <div className=" btn btn-start pt-4">
                    <Link to="/createplan">Start planning</Link>
                  </div>
                  <div class="pt-4 fw-700 small text-danger pl-1 mt-1 ">
                    <Link
                      to="/recommendations"
                      className="TripOrGuideForm__altType"
                    >
                      Or start planning a trip
                    </Link>
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

export default CreatePlan;
