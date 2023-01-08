
import React, { useState } from "react";




import DateSelector from "../Components/Home/DateSelector";
import FeaturedIn from "../Components/Home/FeaturedIn";
import OurFleet from "../Components/Home/OurFleet";
import PopupCard from "../Components/Home/PopupCard";
import Quality from "../Components/Home/Quality";
import NavBar from "../Components/NavBar";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";


function Home() {
  const [show,setShow] = useState(true);
  function closePopup(data){
    setShow(data);
  }
  return (
    <>
<ChakraProvider>
      <NavBar />
      <DateSelector />
      <OurFleet/>
      <Quality/>

      <FeaturedIn/>
      {
        show? <PopupCard closePopup={closePopup}/> : ""
      }
      

      </ChakraProvider>

    </>
  );
}

export default Home;
