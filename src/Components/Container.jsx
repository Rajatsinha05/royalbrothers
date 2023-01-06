import React, { useState } from "react";
import Services from "./Services";
import "./BikeCardPage.css";





import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {Accordion,AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Radio, RadioGroup, Stack } from "@chakra-ui/react";

function Container() {
  let handleCat = () => {};

  let handleSortlth = () => {};

  let type2;

  let sortbyPrice = () => {};

  return (
    <div id="container_outer">
      <div>
        {/* <Datepicker/> */}

{/* //         <Box position="sticky">
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Typography>Bikes</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 <FormGroup>
//                   <FormControlLabel
//                     name="tic"
//                     control={
//                       <Checkbox checked={type2 === "Skin Care" ? true : false} />
//                     }
//                     label="KTM"
//                     onClick={() => handleCat("Skin Care")}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={
//                       <Checkbox checked={type2 === "Lip care" ? true : false} />
//                     }
//                     label="BMW"
//                     onClick={() => handleCat("Lip care")}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={
//                       <Checkbox checked={type2 === "hAIR" ? true : false} />
//                     }
//                     label="Yezadi"
//                     onClick={() => handleCat("HAIR")}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={
//                       <Checkbox checked={type2 === "Perfumes" ? true : false} />
//                     }
//                     label="Duke"
//                     onClick={() => handleCat("Perfumes")}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={
//                       <Checkbox checked={type2 == "makeup" ? true : false} />
//                     }
//                     label="Bajaj"
//                     onClick={() => handleCat("makeup")}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={
//                       <Checkbox checked={type2 == "EVERYDAY" ? true : false} />
//                     }
//                     label="hero"
//                     onClick={() => handleCat("EVERYDAY")}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={<Checkbox disabled />}
//                     label="Tvs"
//                   />
//                 </FormGroup>
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion expanded>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>Sort By : Popularity</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 <FormControl>
//                   <RadioGroup
//                     aria-labelledby="demo-radio-buttons-group-label"
//                     defaultValue="female"
//                     name="radio-buttons-group"
//                   >
//                     <FormControlLabel
//                       value="female"
//                       control={<Radio />}
//                       label="Popularity"
//                     />
//                     <FormControlLabel
//                       value="male"
//                       control={<Radio />}
//                       label="Discount"
//                     />
//                     <FormControlLabel
//                       value="name"
//                       control={<Radio />}
//                       label="Name"
//                       onClick={() => handleSortlth("asc")}
//                     />
//                     <FormControlLabel
//                       value="newArrivals"
//                       control={<Radio />}
//                       label="New Arrivals"
//                     />
//                     <FormControlLabel
//                       value="lth"
//                       control={<Radio />}
//                       label="Price Low To High"
//                       onClick={() => handleSortlth("lth")}
//                     />
//                     <FormControlLabel
//                       value="htl"
//                       control={<Radio />}
//                       label="Price High To Low"
//                       onClick={() => handleSortlth("htl")}
//                     />
//                     <FormControlLabel
//                       value="rating"
//                       control={<Radio />}
//                       label="Ratings"
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel3a-content"
//               id="panel3a-header"
//             >
//               <Typography>Type</Typography>
//             </AccordionSummary>

//             <AccordionDetails>
//               <Typography>
//                 <FormControl>
//                   <RadioGroup
//                     aria-labelledby="demo-radio-buttons-group-label"
//                     defaultValue="female"
//                     name="radio-buttons-group"
//                   >
//                     <FormControlLabel
//                       value="female"
//                       control={<Radio />}
//                       label="Scoty"
//                     />
//                     <FormControlLabel
//                       value="male"
//                       control={<Radio />}
//                       label="Bike"
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion expanded>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Typography>Price Range</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>
//                 <FormGroup>
//                   <FormControlLabel
//                     name="tic"
//                     control={<Checkbox />}
//                     label="Rs. 0 - Rs . 499"
//                     onClick={() => sortbyPrice(0, 499)}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={<Checkbox />}
//                     label="Rs. 500 - Rs . 999"
//                     onClick={() => sortbyPrice(500, 999)}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={<Checkbox />}
//                     label="Rs. 1000 - Rs . 1999"
//                     onClick={() => sortbyPrice(1000, 1999)}
//                   />
//                   <FormControlLabel
//                     name="tic2"
//                     control={<Checkbox />}
//                     label="Rs. 2000 - Above"
//                     onClick={() => sortbyPrice(2000, 9999999)}
//                   />
//                 </FormGroup>
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </Box> */}

<Accordion defaultIndex={[1,3]} allowMultiple position="sticky">
  {/* filtering */}
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      Bikes
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={14}>
    


<RadioGroup >
      <Stack direction='column' spacing={5}>
        <Radio value='BMW' colorScheme='green' >BMW</Radio>
        <Radio value='KTM'>KTM</Radio>
        <Radio value='TVS'>TVS</Radio>
        <Radio value='yezadi'>yezadi</Radio>
        <Radio value='bajaj'>Bajaj</Radio>
        <Radio value='royal'>Royal Enfiled</Radio>  
        <Radio value='hero'>hero</Radio>
    

      </Stack>
    </RadioGroup>

    </AccordionPanel>
  </AccordionItem>



{/* sorting */}
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      Sort by :Popularity
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <RadioGroup defaultValue="Popularity" >
      <Stack direction='column' spacing={5}>
        <Radio value='Popularity' colorScheme='green' >Popularity</Radio>
        <Radio value='KDiscount'>Discount</Radio>
        <Radio value='Name'>Name</Radio>
        <Radio value='New Arrivals'>New Arrivals</Radio>
        <Radio value='Price Low To High'>Price Low To High</Radio>
        <Radio value='Price High To Low'>Price High To Low</Radio>  
        <Radio value='Ratings'>Ratings</Radio>
    

      </Stack>
    </RadioGroup>

    </AccordionPanel>
  </AccordionItem>





{/* tpye */}
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
     Types
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <RadioGroup  >
      <Stack direction='column' spacing={5}>
        <Radio value='bike' colorScheme='green' >Bike</Radio>
        <Radio value='Scooty'>Scooty</Radio>
       

      </Stack>
    </RadioGroup>

    </AccordionPanel>
  </AccordionItem>




  {/* sortin by price range */}

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      Price range
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <RadioGroup  >
      <Stack direction='column' spacing={5}>
        <Radio value='499' colorScheme='green' >Rs. 0 - Rs . 499</Radio>
        <Radio value='999'>Rs. 500 - Rs . 999</Radio>
        <Radio value='1499'>Rs. 999 - Rs . 1499</Radio>
        <Radio value='1999'>Rs. 1499 - Rs . 1999s</Radio>
        <Radio value='2000'>Rs. 2000 - Above</Radio>
       
    

      </Stack>
    </RadioGroup>

    </AccordionPanel>
  </AccordionItem>

</Accordion>







      </div>

      <div id="parent_box">
        <Services />
      </div>
    </div>
  );
}

export default Container;
