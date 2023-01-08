import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CitySelect from "../Components/Home/CitySelect";
import DateSelector from "../Components/Home/DateSelector";
import FeaturedIn from "../Components/Home/FeaturedIn";
import OurFleet from "../Components/Home/OurFleet";
import PopupCard from "../Components/Home/PopupCard";
import Quality from "../Components/Home/Quality";
import NavBar from "../Components/NavBar";

function Home() {
  
  const cityName = useParams();
  const [show,setShow] = useState(true);
  function closePopup(data){
    setShow(data);
  }
  return (
    <>
    {/* <CitySelect/> */}
    <CitySelect/>
      <NavBar city={cityName} />
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
