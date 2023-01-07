

import React from "react";
import DateSelector from "../Components/Home/DateSelector";
import FeaturedIn from "../Components/Home/FeaturedIn";
import OurFleet from "../Components/Home/OurFleet";
import Quality from "../Components/Home/Quality";
import NavBar from "../Components/NavBar";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";

function Home() {
  return (
    <>
<ChakraProvider>
      <NavBar />
      <DateSelector />
      <OurFleet/>
      <Quality/>
      </ChakraProvider>
    </>
  );
}

export default Home;
