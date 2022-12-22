import React from "react";
import useFetch from "../API/useFetch";

const Countries = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="container">
      <h1 className="pt-5 pb-5">
        Historical weather information to help you plan ahead for your next trip
      </h1>
      <div className="row">
        <div className="col-3">
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.id}</p>;
            })}
        </div>
        <div className="col-3">
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.name}</p>;
            })}
        </div>
        <div className="col-3">
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.email}</p>;
            })}
        </div>
        <div className="col-3">
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.address.city}</p>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Countries;
