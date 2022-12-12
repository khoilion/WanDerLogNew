import React from "react";
import "./googledisclosure.css";

const GoogleDisclosure = () => {
  return (
    <>
      <div className="navbar-offset">
        <div className="googledisclosure">
          <div className="container">
            <h1>Google API Services User Data Policy</h1>
            <p>
              As a part of Wanderlog's functionality, you can sign in with your
              Google account or give us permissions to connect your Gmail
              account so that we automatically import your reservations to your
              trips.
            </p>
            <p>
              Wanderlog's use and transfer to any other app of information
              received from Google Accounts will adhere to Google API Services
              User Data Policy, including the Limited Use requirements
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleDisclosure;
