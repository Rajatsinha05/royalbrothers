import React, { useState } from "react";
import DateSelector from "../Components/Home/DateSelector";
import FeaturedIn from "../Components/Home/FeaturedIn";
import OurFleet from "../Components/Home/OurFleet";
import PopupCard from "../Components/Home/PopupCard";
import Quality from "../Components/Home/Quality";
import NavBar from "../Components/NavBar";

function Home() {
  const [show,setShow] = useState(true);
  function closePopup(data){
    setShow(data);
  }
  return (
    <>
      <NavBar />
      <DateSelector />
      <OurFleet/>
      <Quality/>
      {
        show? <PopupCard closePopup={closePopup}/> : ""
      }
      
    </>
  );
}

export default Home;
