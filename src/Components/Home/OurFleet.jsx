import React, { useEffect, useState } from "react";
import BikeCard from "./BikeCard";
import { bikeData } from "./FourData";

function OurFleet() {
  const [durationValue, setDurationValue] = useState("Hourly");
  const [disStyle, setDisStyle] = useState({ display: "none" });
  const [charge,setCharge] = useState("hourly");

  return (
    <div style={{ margin: "20px 0" }}>
      <h1 style={{ fontSize: "30px", textAlign: "center" }}>OUR FLEET</h1>
      <div
        style={{
          width: "50px",
          background: "#fed24d",
          margin: "auto",
          height: "5px",
          marginBottom: "40px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <p style={{ marginRight: "15px" }}>Duration</p>
        <div style={{ width: "150px" }}>
          <div
            className="durationButton"
            onClick={() => {
              setDisStyle({ display: "block" });
            }}
          >
            <p>{durationValue}</p> <i class="fa-solid fa-angle-down"></i>
          </div>
          <div
            className="durationDropdown"
            style={disStyle}
            onClick={() => {
              setDisStyle({ display: "none" });
            }}
          >
            <p
              onClick={() => {
                setDurationValue("Hourly");setCharge("hourly");
              }}
            >
              Hourly
            </p>
            <p
              onClick={() => {
                setDurationValue("7 days");setCharge("daily");
              }}
            >
              7 days
            </p>
            <p
              onClick={() => {
                setDurationValue("15 days");setCharge("daily");
              }}
            >
              15 days
            </p>
            <p
              onClick={() => {
                setDurationValue("1 month");setCharge("monthly");
              }}
            >
              1 month
            </p>
            <p
              onClick={() => {
                setDurationValue("3 month");setCharge("monthly");
              }}
            >
              3 month
            </p>
          </div>
        </div>
      </div>
      <div className="homeBikeCardDiv">
        {/* After adding data then mapping buttonCardComponent */}
        <>
          {bikeData?.map((elem) => (
            <BikeCard name={elem.name} image={elem.image} priceCharge={charge} charges={elem.charge} addButton={elem.button}
            />
          ))}
        </>
      </div>
      <p
        style={{ textAlign: "center", marginTop: "15px", marginBottom: "50px" }}
      >
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </p>
    </div>
  );
}

export default OurFleet;
