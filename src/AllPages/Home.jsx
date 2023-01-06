

import React from "react";
import DateSelector from "../Components/Home/DateSelector";
import FeaturedIn from "../Components/Home/FeaturedIn";
import OurFleet from "../Components/Home/OurFleet";
import Quality from "../Components/Home/Quality";
import NavBar from "../Components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <DateSelector />
      <OurFleet/>
      <Quality/>
    </>
  );
}

export default Home;
