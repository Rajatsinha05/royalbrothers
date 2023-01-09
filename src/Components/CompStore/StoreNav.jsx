import { Box, ChakraProvider, Flex, Img, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
function StoreNav() {
  return (
    <ChakraProvider>
      <Box bg="#FFFFFF" borderBottom=".1px solid grey">
        <Box padding="25px">
          <Flex justifyItems="center" alignItems="center">
            <Box>
              <Img
                src="https://cdn.shopify.com/s/files/1/0571/9906/7323/files/RBStoreLogo.png?height=100&v=1621529392"
                height="50px"
              />
            </Box>
            <Spacer />
            <Box>
              <Flex gap="20px" justifyItems="center" alignItems="center">
                <SearchSharpIcon />
                <PersonOutlineOutlinedIcon />
                <ShoppingCartOutlinedIcon />
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Flex
          gap="25"
          pl="10"
          pb="15px"
          justifyItems="center"
          alignItems="center"
        >
          <Text
            color="grey"
            _hover={{ textDecoration: " underline", cursor: "pointer" }}
          >
            PRODUCTS
          </Text>

          <Text
            color="grey"
            _hover={{ textDecoration: " underline", cursor: "pointer" }}
          >
            BRANDS
          </Text>

          <Text
            color="grey"
            _hover={{ textDecoration: " underline", cursor: "pointer" }}
          >
            BIKE RENTAL
          </Text>
          <Text
            color="grey"
            _hover={{ textDecoration: " underline", cursor: "pointer" }}
          >
            RBX SUBSCRIPTION
          </Text>
          <Text
            color="grey"
            _hover={{ textDecoration: " underline", cursor: "pointer" }}
          >
            ABOUT US
          </Text>
          <Text
            color="grey"
            _hover={{ textDecoration: " underline", cursor: "pointer" }}
          >
            BLOG
          </Text>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default StoreNav;
