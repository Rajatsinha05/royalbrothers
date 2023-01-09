
import React, { useState } from "react";




import DateSelector from "../Components/Home/DateSelector";
import FeaturedIn from "../Components/Home/FeaturedIn";
import OurFleet from "../Components/Home/OurFleet";
import PopupCard from "../Components/Home/PopupCard";
import Quality from "../Components/Home/Quality";
import NavBar from "../Components/NavBar";
import Royal from "../Components/Home/Royal"
import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import CitySelect from "../Components/Home/CitySelect";
import { DateComponent } from "../Components/Home/DateComponent";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";


function Home() {
  const {city} = useParams()
  const [show,setShow] = useState(true);
  function closePopup(data){
    setShow(data);
  }
  return (
    <>
<ChakraProvider>
  {
    !city? 
    <CitySelect/> : ""
  }
      <NavBar cityName={city}/>
      <DateSelector />
      <OurFleet/>
      <Quality/>

      
      {
        show? <PopupCard closePopup={closePopup}/> : ""
      }
      
<Footer/>
      </ChakraProvider>

    </>
  );
}

export default Home;
