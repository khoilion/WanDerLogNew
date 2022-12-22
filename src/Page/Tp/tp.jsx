import React from "react";
import useFetch from "../API/useFetch";

const TP = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      <div className="container">
        <h1 className="fw-700 mb-5 mt-4">
          {" "}
          Top trip planner destinations around the world
        </h1>
        <div>
          <div className="row">
            <div className="col-3">
              {data &&
                data.map((item) => {
                  return <p key={item.id}>{item.id}</p>;
                })
              }
            </div>
            <div className="col-3">
              {data && 
                data.map((item) => {
                  return <p key={item.id}>{item.name}</p>;
                })
              }
            </div>
            <div className="col-3">
              {data &&
                data.map((item) => {
                  return <p key={item.id}>{item.email}</p>;
                })
              }
            </div>
            <div className="col-3">
              {data &&
                data.map((item) => {
                  return <p key={item.id}>{item.address.city}</p>;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TP;
