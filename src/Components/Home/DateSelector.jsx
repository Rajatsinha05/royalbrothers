import React from "react";
import "./Home.css";

function DateSelector() {
  return (
    <>
      <div className="dateSelectorDiv">
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url("https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/RBX_carousel_one-2f5f86ebeaec92ae789b22943db636cf309810083a9f6cdca1b5d06e520fdc04.jpg")`,
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
          display:"flex",
          justifyContent:"center",
          alignItems: "flex-end"
        }}
      >
        <button style={{background:"#fed24d",width:"200px",height:"30px",borderRadius:"20px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            Subscribe now <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default DateSelector;
