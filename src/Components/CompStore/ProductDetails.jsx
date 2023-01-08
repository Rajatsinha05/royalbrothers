import React from "react";
import "./ProductDetail.css";
import StoreNav from "./StoreNav";
import {
  Box,
  ChakraProvider,
  Flex,
  ListItem,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import Trending from '../CompStore/Trending'



function ProductDetails() {
  return (
    <ChakraProvider>
      <StoreNav />

      <Box width="100%" h="45px" bg="yellow.100" mt="10px"></Box>
      <Box>
        <Flex>
          <Box width="45%" bg="red" h="400px"></Box>

          <Box width="45%" bg="black" h="400px"></Box>
        </Flex>

        <Box mt="40px" mb="40px">
          <Tabs size="md" variant="enclosed">
            <TabList>
              <Tab> DESCRIPTION </Tab>
              <Tab>BENEEFITS</Tab>
              <Tab>DIRECTION OF USE</Tab>
              <Tab>OTHER INFORMATION</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text mt="5">
                  STUDDS SMG 1 Gloves are fashionable half-finger riding gloves
                  with high-quality fine mesh fabric, pre-curved armour design,
                  <br />
                  anti-slip silicon pads, TPU knuckle protection, sealed edges
                  with high-quality stitching and wrist with rubber fitting and
                  velcro for a perfect fit.
                </Text>
                <Spacer />

                <Text mt="10">
                  STUDDS SMG 1 Gloves are fashionable half-finger riding gloves
                  with high-quality fine mesh fabric, pre-curved armour design,
                  <br />
                  anti-slip silicon pads, TPU knuckle protection, sealed edges
                  with high-quality stitching and wrist with rubber fitting and
                  velcro for a perfect fit.
                </Text>

                <Text mt="10">
                  STUDDS SMG 1 Gloves are fashionable half-finger riding gloves
                  with high-quality fine mesh fabric, pre-curved armour design,
                  <br />
                  anti-slip silicon pads, TPU knuckle protection, sealed edges
                  with high-quality stitching and wrist with rubber fitting and
                  velcro for a perfect fit.
                </Text>
              </TabPanel>
              <TabPanel>
                <Text mt="5">
                  SMJ1 has a contemporary design which attracts all riders. It
                  has been designed to be your safest, most comfortable and a
                  perfect riding partner in all weather conditions, the new
                  range of jackets features a protective, breathable mesh design
                  that promotes airflow to keep the rider cool and comfortable
                  during the summers while the inner removable thermal jacket
                  ensures appropriate warmth during winters.
                  <br />
                  Designed for use on the road and highways, the riding jacket
                  combines utility and comfort to provide the ultimate riding
                  experience. The jacket has been created keeping in mind the
                  rider’s position, so that it seamlessly provides support. It’s
                  constructed with Multi-fabric shells and abrasion resistant
                  materials that offer unparalleled safety. This line of riding
                  jackets are for those who seek open roads and want to enjoy
                  the experience along the way.
                </Text>
                <Spacer />

                <Text mt="10">
                  STUDDS SMG 1 Gloves are fashionable half-finger riding gloves
                  with high-quality fine mesh fabric, pre-curved armour design,
                  <br />
                  SMJ1 has a contemporary design which attracts all riders. It
                  has been designed to be your safest, most comfortable and a
                  perfect riding partner in all weather conditions, the new
                  range of jackets features a protective, breathable mesh design
                  that promotes airflow to keep the rider cool and comfortable
                  during the summers while the inner removable thermal jacket
                  ensures appropriate warmth during winters.
                </Text>

                <Text mt="10">
                  Designed for use on the road and highways, the riding jacket
                  combines utility and comfort to provide the ultimate riding
                  experience. The jacket has been created keeping in mind the
                  rider’s position, so that it seamlessly provides support. It’s
                  constructed with Multi-fabric shells and abrasion resistant
                  materials that offer unparalleled safety. This line of riding
                  jackets are for those who seek open roads and want to enjoy
                  the experience along the way.
                  <br />
                  anti-slip silicon pads, TPU knuckle protection, sealed edges
                  with high-quality stitching and wrist with rubber fitting and
                  velcro for a perfect fit.
                </Text>
              </TabPanel>
              <TabPanel>
                <ul>
                  <Text mt="5" mb="5">
                    <p> Wash with like colors, in cold water.</p>
                  </Text>
                  <Text mt="5" mb="5">
                    <p> Wash with like colors, in cold water.</p>
                  </Text>

                  <Text mt="5" mb="5">
                    <p>Do not iron on print.</p>
                  </Text>
                  <p>We recommend washing separately for the first wash.</p>
                  <Text mt="5" mb="5">
                    <p>Use mild detergent.</p>
                  </Text>
                  <Text mt="5" mb="5">
                    <p>Do not use bleach.</p>
                  </Text>
                </ul>
              </TabPanel>
              <TabPanel>
                <Text>
                  We are a bunch of millennials focused on building India’s
                  largest mobility solutions provider. <br />
                  Our focus has led us to build a platform providing rentals    <br />
                  spanning across 14 states, 43 cities and 3 international
                  cities.
                  <br />
                  Transportation and mobility solutions is one of the least
                  understood and most unorganized markets. We see this as an   <br />
                  unexplored opportunity to build a system that can be trusted   <br />
                  by everyone beyond barriers. We have no limitations when it
                  comes to two wheelers and enjoy serving everything from a{" "}
                  <br />
                  scooter to a superbike available on both website and mobile
                  application.
                  <br />
                  We are obsessed with the concept of ‘Why buy when you can
                  rent’.
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Trending/>
      </Box>
    </ChakraProvider>
  );
}

export default ProductDetails;
