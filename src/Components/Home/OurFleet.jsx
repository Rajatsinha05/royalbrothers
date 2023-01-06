import React, { useEffect, useState } from "react";
import BikeCard from "./BikeCard";

function OurFleet() {
  const [durationValue, setDurationValue] = useState("Hourly");
  const [disStyle, setDisStyle] = useState({ display: "none" });
  
  
  // useEffect(()=>{
    // if(durationValue==="7 days"){
  //   setPrice();
  // }else if (durationValue==="15 days"){
  //   setPrice();
  // }else if (durationValue==="1 month"){
  //   setPrice();
  // }else if (durationValue==="3 month"){
  //   setPrice();
  // }else{
  //   setPrice("$18/hour");
  // }
  // },[durationValue])

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
        <p style={{marginRight:"15px"}}>Duration</p>
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
                setDurationValue("Hourly");
              }}
            >
              Hourly
            </p>
            <p
              onClick={() => {
                setDurationValue("7 days");
              }}
            >
              7 days
            </p>
            <p
              onClick={() => {
                setDurationValue("15 days");
              }}
            >
              15 days
            </p>
            <p
              onClick={() => {
                setDurationValue("1 month");
              }}
            >
              1 month
            </p>
            <p
              onClick={() => {
                setDurationValue("3 month");
              }}
            >
              3 month
            </p>
          </div>
        </div>
      </div>
      <div className="homeBikeCardDiv">
             
             {/* After adding data then mapping buttonCardComponent */}
              {/* <>
              {
              data?.map((elem)=>{
                <BikeCard {props}/>
              })
              }
              </> */}

        <BikeCard value={durationValue} />
        <BikeCard value={durationValue} />
        <BikeCard value={durationValue} />
        <BikeCard value={durationValue} />
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
