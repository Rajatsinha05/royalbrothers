import {
  Box,
  ChakraProvider,
  Flex,
  MenuOptionGroup,
  Select,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React from "react";



function Storehome() {


  
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
              <option value="">Price Low to High</option>
              <option value="">Price High to Low</option>
            </Select>
          </Box>
          <Spacer />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Storehome;
