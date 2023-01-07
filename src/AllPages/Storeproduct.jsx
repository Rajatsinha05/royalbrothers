import React from "react";
import Slider from "../Components/CompStore/Slider";
import AzendaLine from "../Components/CompStore/AzendaLine";
import Trending from "../Components/CompStore/Trending";

import StoreNav from "../Components/CompStore/StoreNav";
import Storehome from "../Components/CompStore/Storehome";

function Storeproduct() {
  return (
    <div>
      <StoreNav />
      <Slider />
      <AzendaLine />
<Storehome/>
      <Trending />
    </div>
  );
}

export default Storeproduct;
