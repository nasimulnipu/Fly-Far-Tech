import { Box, Tab, Typography } from "@mui/material";
import React from "react";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from "react";
import PhotoGrid from "./PhotoGrid";

const Portfolio = () => {
    const[value , setValue]= useState('1')
    const handleChange =(event: React.SyntheticEvent , newValue: string)=>{
        setValue(newValue)
    }
  return (
    <Box sx={{ background: "rgb(14, 13, 38)", color:'#FFFFFF'}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(14, 13, 38)",
          color: "#FFFFFF",
          margin:'30px 0px',
        }}
      >
        <Typography variant="h5" sx={{
          fontWeight:'400',
          fontSize:'29px'
        }}>Portfolio</Typography>
        <Typography variant="h3" sx={{
          fontWeight:'400',
          fontSize:'50px'
        }}>Our latest projects!!</Typography>
        <Typography variant="span" sx={{
          fontWeight:'400',
          fontSize:'18px',
          color:'#4F76AE'
        }}>
          This is what we did in each section.
        </Typography>
      </Box>
        <TabContext value={value}  >
            <Box >
                <TabList aria-label="example" onChange={handleChange} centered   >
                    <Tab sx={{color:'white'}} label='UI/UX Design' value='1'/>
                    <Tab sx={{color:'white'}}  label='Creative' value='2'/>
                    <Tab sx={{color:'white'}}  label='Web Development' value='3'/>
                    <Tab sx={{color:'white'}} label='Mobile App Development' value='4'/>
                </TabList>
            </Box>
            <TabPanel value='1'> <PhotoGrid/>  </TabPanel>
            <TabPanel value='2'> <PhotoGrid/> </TabPanel>
            <TabPanel value='3'> <PhotoGrid/> </TabPanel>
            <TabPanel value='4'> <PhotoGrid/> </TabPanel>
        </TabContext>
    </Box>
  );
};

export default Portfolio;
