import React from "react";
import "./traveguide.css";
import { Link } from "react-router-dom";
import AutoComplete from "react-google-autocomplete";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase-config";
import { useConnection } from "../../config/redux/connection/index";

const TravelGuide = () => {
  const { connection } = useConnection();
  const { userInfo } = connection;
  const [address, setAddess] = React.useState("");

  const onSave = async () => {
    await addDoc(collection(db, "Tour"), {
      address,
      email: userInfo?.email,
      displayName: userInfo?.displayName,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    });
  };

  return (
    <>
      <div className="container">
        <div className="text-center pt-5 pb-5 mt-5 mb-5">
          <h1 className="fs-36 fw-700 letter-spacing-3">
            Write a travel guide
          </h1>
          <p className="text-muted">
            Help fellow travelers by writing up your tips or a past itinerary.
          </p>
          <div className="page">
            <div className="field field_v1 field_v2">
              <label className="ha-screen-reader">Where to ?</label>
              <AutoComplete
                style={{ width: "100%" }}
                apiKey="AIzaSyDMpLdwzRWo90pvohoMvrH9dinBcoy7mg4"
                onPlaceSelected={(place) => {
                  console.log(place.formatted_address);
                  setAddess(place.formatted_address);
                  console.log(place);
                }}
              />
            </div>
          </div>
          <div className=" btn btn-start pt-4">
            <button type="button" onClick={onSave}>
              Start writing
            </button>
          </div>
          <div className="pt-4 fw-700 small text-danger pl-1 mt-1 ">
            <Link to="/CreatePlan" className="TripOrGuideForm__altType">
              Or start planning a trip
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelGuide;
