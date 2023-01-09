import React, { useState } from "react";
import Services from "./Services";
import "./BikeCardPage.css";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";




import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { createSearchParams ,useSearchParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Container() {

  const [searchParams, setSearchParams] = useSearchParams("");
  let handleCat = () => {



    



  };

  let handleSortlth = (val) => {

    setSearchParams(
      createSearchParams({ filter: val })
    );


  };

  let type2;

  let sortbyPrice = (val,val2) => {

    setSearchParams(
      createSearchParams({filter: val,filter:val2 })
    );

  };

  return (<>
  
  <NavBar/>
 
    <div id="container_outer">
      <div>
        {/* <Datepicker/> */}

          <Box position="sticky">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Bikes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormGroup>
                    <FormControlLabel
                      name="tic"
                      control={
                        <Checkbox checked={type2 === "Skin Care" ? true : false} />
                      }
                      label="KTM"
                      onClick={() => handleCat("Skin Care")}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={
                        <Checkbox checked={type2 === "Lip care" ? true : false} />
                      }
                      label="BMW"
                      onClick={() => handleCat("Lip care")}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={
                        <Checkbox checked={type2 === "hAIR" ? true : false} />
                      }
                      label="Yezadi"
                      onClick={() => handleCat("HAIR")}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={
                        <Checkbox checked={type2 === "Perfumes" ? true : false} />
                      }
                      label="Duke"
                      onClick={() => handleCat("Perfumes")}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={
                        <Checkbox checked={type2 == "makeup" ? true : false} />
                      }
                      label="Bajaj"
                      onClick={() => handleCat("makeup")}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={
                        <Checkbox checked={type2 == "EVERYDAY" ? true : false} />
                      }
                      label="hero"
                      onClick={() => handleCat("EVERYDAY")}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={<Checkbox disabled />}
                      label="Tvs"
                    />
                  </FormGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Sort By : Popularity</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Popularity"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Discount"
                      />
                      <FormControlLabel
                        value="name"
                        control={<Radio />}
                        label="Name"
                        onClick={() => handleSortlth("asc")}
                      />
                      <FormControlLabel
                        value="newArrivals"
                        control={<Radio />}
                        label="New Arrivals"
                      />
                      <FormControlLabel
                        value="lth"
                        control={<Radio />}
                        label="Price Low To High"
                        onClick={() => handleSortlth("lth")}
                      />
                      <FormControlLabel
                        value="htl"
                        control={<Radio />}
                        label="Price High To Low"
                        onClick={() => handleSortlth("htl")}
                      />
                      <FormControlLabel
                        value="rating"
                        control={<Radio />}
                        label="Ratings"
                      />
                    </RadioGroup>
                  </FormControl>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Type</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Scoty"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Bike"
                      />
                    </RadioGroup>
                  </FormControl>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Price Range</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <FormGroup>
                    <FormControlLabel
                      name="tic"
                      control={<Checkbox />}
                      label="Rs. 0 - Rs . 499"
                      onClick={() => sortbyPrice(0, 499)}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={<Checkbox />}
                      label="Rs. 500 - Rs . 999"
                      onClick={() => sortbyPrice(500, 999)}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={<Checkbox />}
                      label="Rs. 1000 - Rs . 1999"
                      onClick={() => sortbyPrice(1000, 1999)}
                    />
                    <FormControlLabel
                      name="tic2"
                      control={<Checkbox />}
                      label="Rs. 2000 - Above"
                      onClick={() => sortbyPrice(2000, 9999999)}
                    />
                  </FormGroup>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
      </div>

      <div id="parent_box" style={{overflow:"scroll"}}>
        <Services />
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default Container;
