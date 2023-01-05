import React from "react";
import BikeCard from "./BikeCard";

function OurFleet() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1 style={{ fontSize: "30px", textAlign: "center"}}>OUR FLEET</h1>
      <div style={{width:"50px",background:"#fed24d",margin:"auto",height:"5px"}}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <p>Duration</p>
        <div
          style={{
            padding: "5px",
            borderRadius: "3px",
            margin: "0px 10px",
            width: "10rem",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
          }}
        >
          <p style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            Hourly <i class="fa-solid fa-angle-down"></i>
          </p>
        </div>
      </div>
      <div className="homeBikeCardDiv">
        <BikeCard />
        <BikeCard />
        <BikeCard />
        <BikeCard />
      </div>
      <p style={{ textAlign: "center",marginTop:"15px",marginBottom:"50px"}}>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </p>
    </div>
  );
}

export default OurFleet;
