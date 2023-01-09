import {
  Box,
  ChakraProvider,
  Flex,
  Grid,
 
  Select,
  Spacer,
  
} from "@chakra-ui/react";
import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import StoreCard from "./StoreCard";

import { useDispatch, useSelector } from "react-redux";
import { SetData } from "../../ReduxStrore/Action";




function Storehome() {
  let data=useSelector((store)=>store.reducer.bikes)

useEffect(() => {
 get();

}, [])


let dispacth=useDispatch();
let get =async()=>{

let res=await fetch(`https://royalbrothers.cyclic.app/storeproducts`);
let result=await res.json();
SetData(dispacth,result)


}
let handle=(val)=>{


  if(val=="htl"){
    data.sort((a,b)=>b.pride-a.pride)
  }
  else if(val=="lth"){

    data.sort((a,b)=>a.pride-b.pride)
  }
}

  
  return (
    <ChakraProvider>
      <Box >
        <Flex justifyContent="center" alignItems="center" p="10"> 
        <Spacer/>
          <Box fontSize="20px" fontWeight="hairline" border="1px solid grey" p="3px"   _hover={{ cursor: "pointer" }} >All Products</Box>
          <Spacer />

          <Box fontSize="20px" fontWeight="hairline"  border="1px solid grey" p="3px" _hover={{ cursor: "pointer" }}> Helmat</Box>
          <Spacer />
          <Box fontSize="20px" fontWeight="hairline"  border="1px solid grey" p="3px" _hover={{ cursor: "pointer" }}>Riding Jacket</Box>
          <Spacer />
          <Box fontSize="20px" fontWeight="hairline"  border="1px solid grey" p="3px" _hover={{ cursor: "pointer" }}>Gloves</Box>
          <Spacer />
          <Box fontSize="20px" fontWeight="hairline"  border="1px solid grey"  p="3px" _hover={{ cursor: "pointer" }}> T-Shirt</Box>
          <Spacer />
          <Box fontSize="20px" fontWeight="hairline" border="1px solid grey" p="3px" _hover={{ cursor: "pointer" }}> Bag</Box>
          <Spacer />

          <Box fontSize="20px" fontWeight="hairline "  border="1px solid grey" p="3px" _hover={{ cursor: "pointer" }}>
            <Select variant="outline" outline="none">
              <option value="">---Sort by price---</option>
              <option value="" onClick={()=>handle("lth")}>Price Low to High</option>
              <option value="" onClick={()=>handle("htl")}> Price High to Low</option>
            </Select>
          </Box>
          <Spacer />
        </Flex>
      </Box>   

<Grid templateColumns='repeat(4, 1fr)' gap="8px"  p="5" rowGap="15px"> 





{data.length>0 && data.map((ele,idx)=>
 {

  return(
<Link to={`/product/${ele.id}`}>

  <StoreCard {...ele}/>
</Link>


  )
 }


)}



</Grid>


    </ChakraProvider>
  );
}

export default Storehome;
