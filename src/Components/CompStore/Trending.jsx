import { Box, Card, CardHeader, Center, ChakraProvider, Flex, Heading, Img, Text } from "@chakra-ui/react";


import React, { useRef, useState } from "react";
// Import Swiper React components

import "./Store.css";
import Footer from "../Footer";


function Trending() {
  return (
   
      <ChakraProvider>

        <Box>
        <Box bg="yellow.100" position="absolute">
          <Center>
            <Text  pt='20'  color="" fontSize="30"> --------------- CATEGORY ---------------</Text>
          </Center>





          <Box pos="relative" top="150">
<Flex gap="10" alignItems="center" >
    <Card m="15" border="5px solid yellow">
    <Img src="https://cdn.shopify.com/s/files/1/0571/9906/7323/collections/swaraj-tiwari-EoNONBjQxtM-unsplash.jpg?v=1668085084&width=1100"  />


    <CardHeader>
    <Heading size='md' color="blackAlpha.700" textAlign="center">Riding Gear</Heading>
  </CardHeader>
        </Card>

<Card  m="15" border="5px solid yellow">
<img src="https://cdn.shopify.com/s/files/1/0571/9906/7323/collections/jeff-sheldon-Lj1S1_KD61k-unsplash.jpg?v=1668085137&width=1100" />
<CardHeader>
    <Heading size='md' color="blackAlpha.700" textAlign="center">RB Merchandise</Heading>
  </CardHeader>
</Card>
       
         <Card  m="15" border="5px solid yellow">

         <img src="https://cdn.shopify.com/s/files/1/0571/9906/7323/collections/Motorcycle_Accessories.jpg?v=1668085117&width=1100" />
         <CardHeader>
    <Heading size='md' color="blackAlpha.700" textAlign="center">Motorcycle Accessories</Heading>
  </CardHeader>
         </Card>

        
       
          </Flex>
          </Box>
        </Box>


        </Box>
  <Box mt="880px">

<Footer/>
</Box>
       

      </ChakraProvider>

      

  );
}

export default Trending;
