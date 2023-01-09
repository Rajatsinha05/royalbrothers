import {
  Box,
  Center,
  Flex,
  Text,
  Image,
  Heading,
  Spacer,
  Input,
  Button,
  Select,
  ChakraProvider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { SetData } from "../ReduxStrore/Action";
function Cart() {
  let style = {
    bRadius: "md",
    paddingBox: "15px 20px",
    paddingText: "5px",
    shadowbox:
      "0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)",
    mt: "3",
    mb: "4",
  };


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
  
  




  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box w="100%" bgColor="#fed250" align="center">
          <Text fontWeight="500" maxW="80%" align="center" p="2px">
            Now rent two wheelers for 4 or 7 days at a lower special price.
            Click to modify search to 4 days or 7 days ( 7 Hours and 30 Minutes
            )
          </Text>
        </Box>
        <Center>
          <Box>
            <Flex
              m="3"
              mt="5"
              wrap={{ base: "nowrap" }}
              p="0 70px"
              alignItems="baseline"
            >
              <Box
                mr="3"
                boxShadow={style.shadowbox}
                borderRadius={style.bRadius}
                p={style.paddingBox}
                h="500"
              >
                <Heading
                  textTransform="uppercase"
                  fontWeight="600"
                  p={style.paddingText}
                  color="black"
                >
                  Summary
                </Heading>
                <Flex alignItems="center">
                  <Box m="2">
                    <Image
                      // src={data[0].url_1}
                      _hover={{ transform: "scale(1.1)" }}
                    />
                    <Text
                      fontSize="28px"
                      fontWeight="500"
                      align="center"
                      mt="17px"
                    >
                      {/* {data[0].name} */}
                    </Text>
                  </Box>
                  <Spacer />
                  <Box p={style.paddingBox}>
                    <Flex name="timings" mb={style.mb}>
                      <Box>
                        <Text>10:00 am</Text>
                        <Text>05 Jan 2023</Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <Text>to</Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <Text>5:00 pm</Text>
                        <Text>05 Jan 2023</Text>
                      </Box>
                    </Flex>
                    <hr />
                    <Box mt={style.mt} mb={style.mb}>
                      <Text>
                        BTM Layout (Below Ambur Star Briyani) No 9, Dr Puneeth
                        Rajkumar Rd, BTM 2nd Stage, Kuvempu Nagar, BTM Layout
                      </Text>
                    </Box>
                    <hr />
                    <Box mt={style.mt}>
                      <Flex>
                        <Text>Minimum 10.0 hour charges applicable</Text>
                        <Spacer />
                        <Text>
                          <span style={{ fontWeight: "500" }}>₹</span>
                          {/* {data[0].price} */}
                        </Text>
                      </Flex>
                    </Box>
                    <Box mt={style.mt}>
                      <Flex>
                        <Text color="#555" fontWeight="700">
                          Total
                        </Text>
                        <Spacer />
                        <Text color="#555" fontWeight="700">
                          <span style={{ fontWeight: "500", color: "black" }}>
                            ₹
                          </span>
                          {/* {data[0].price} */}
                        </Text>
                      </Flex>
                    </Box>
                    {/* <Box mt={style.mt}>
                <Flex>
                  <Input placeholder='Coupon code' mr='2'></Input>
                  <Spacer/>
                  <Button bgColor='#fed250' minW='100px'>Apply</Button>
                </Flex>
              </Box> */}
                    <Box mt={style.mt}>
                      <Flex>
                        <Text>Number of Helmets (?)</Text>
                        <Spacer />
                        <Select h="25px" w="">
                          <option value="1">1</option>
                          <option value="1">2</option>
                        </Select>
                      </Flex>
                    </Box>
                    <Box mt={style.mt}>
                      <Flex>
                        <Text>Km limit (?)</Text>
                        <Spacer />
                        <Text>33 km</Text>
                      </Flex>
                    </Box>
                    <Box mt={style.mt}>
                      <Flex>
                        <Text>Excess km charges (?)</Text>
                        <Spacer />
                        <Text>
                          <span style={{ fontWeight: "500" }}>₹</span>
                          4.0/km
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              {/* box 2 */}
              <Box
                boxShadow={style.shadowbox}
                borderRadius={style.bRadius}
                p={style.paddingBox}
                minW="400px"
                h="500px"
              >
                <Heading
                  textTransform="uppercase"
                  fontWeight="600"
                  p={style.paddingText}
                  mb="5"
                  color="black"
                >
                  Checkout
                </Heading>
                <Box mb={style.mb}>
                  <Flex>
                    <Text mt="3">Booking Fee</Text>
                    <Spacer />
                    <Text mt="3">
                      <span style={{ fontWeight: "500" }}>₹ </span>
                      {/* {data[0].price} */}
                    </Text>
                  </Flex>
                </Box>
                <Box mb={style.mb}>
                  <Flex>
                    <Text mt="3">CGST (14%)</Text>
                    <Spacer />
                    <Text mt="3">
                      <span style={{ fontWeight: "500" }}>₹ </span>
                      {/* {(data[0].price * 14) / 100} */}
                    </Text>
                  </Flex>
                </Box>
                <Box mb={style.mb}>
                  <Flex>
                    <Text mt="3">SGST (14%)</Text>
                    <Spacer />
                    <Text mt="3">
                      <span style={{ fontWeight: "500" }}>₹ </span>
                      {/* {(data[0].price * 14) / 100} */}
                    </Text>
                  </Flex>
                </Box>
                <Box mb={style.mb}>
                  <Flex>
                    <Text mt="3">Refundable Deposit</Text>
                    <Spacer />
                    <Text mt="3">
                      <span style={{ fontWeight: "500" }}>₹ </span>
                      0.00
                    </Text>
                  </Flex>
                </Box>
                <Box mt={style.mt}>
                  <Flex>
                    <Text color="#555" fontWeight="700" mt="3">
                      Total Payable Amount
                    </Text>
                    <Spacer />
                    <Text color="#555" fontWeight="700" mt="3">
                      <span style={{ fontWeight: "500", color: "black" }}>
                        ₹
                      </span>
                      {/* {data[0].price} */}
                    </Text>
                  </Flex>
                </Box>
                <Box marginTop="19px">
                  <Flex>
                    <Input placeholder="Coupon code" mr="2"></Input>
                    <Spacer />
                    <Button bgColor="#fed250" minW="100px">
                      Apply
                    </Button>
                  </Flex>
                </Box>

                <Link to="/payment">
                  <Center mt="5">
                    <Button bgColor="#fed250" w="70%" mb="5" mt="2">
                      Make Payment
                    </Button>
                  </Center>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Center>

        <Footer />
      </ChakraProvider>
    </>
  );
}

export default Cart;
