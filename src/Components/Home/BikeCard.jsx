import React, { useEffect, useState } from "react";

const BikeCard = ({ name, image, priceCharge, charges, addButton }) => {
  const [price, setPrice] = useState(charges[0].hourly);
  useEffect(() => {
    if (priceCharge === "hourly") {
      setPrice(charges[0].hourly);
    } else if (priceCharge === "daily") {
      setPrice(charges[0].daily);
    } else if (priceCharge === "monthly") {
      setPrice(charges[0].monthly);
    }
  }, [priceCharge]);
  const printData = addButton;

  return (
    printData? <div style={{ position: "relative"}}>
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.589)",
        position: "absolute",
        zIndex: "5",
        color:"white"
      }}
    >
      <div><p>View More</p>
      <i className="fa-solid fa-circle-plus"></i>
    </div>
      </div>
    <div>
      <h4 style={{padding:"15px"}}>{name}</h4>
      <img
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        src={image}
        alt=""
      />
      <hr />
      <h3>{price}</h3>
      <div
        style={{
          background: "#fed24d",
          borderRadius: "0 0 5px 5px",
          padding: "5px",
        }}
      >
        <button style={{ cursor: "pointer" }}>BOOK NOW</button>
      </div>
    </div>
  </div>
  :
  <div>
      <div>
        <h4 style={{padding:"15px"}}>{name}</h4>
        <img
          style={{
            padding: "10px 20px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          src={image}
          alt=""
        />
        <hr />
        <h3>{price}</h3>
        <div
          style={{
            background: "#fed24d",
            borderRadius: "0 0 5px 5px",
            padding: "5px",
          }}
        >
          <button style={{ cursor: "pointer" }}>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
