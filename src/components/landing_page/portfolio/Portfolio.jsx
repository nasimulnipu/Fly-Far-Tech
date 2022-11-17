import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import PhotoGrid from './PhotoGrid';


const Portfolio = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
      setValue(newValue)
    }
  return (
    <Box >
  
    <Box component= "img" src="/img/topVector.png" sx={{position:'absolute', left:'0', top:'0'}}/>
    {/* <Box component= "img" src="/img/middleVector.png" sx={{position:'absolute'}}/> */}
    {/* <Box component= "img" src="/img/rightVector.png" sx={{position:'absolute', right:'0'}}/> */}

    <Box sx={{ backgroundColor: "rgb(14, 13, 38)", padding: "50px 100px", color: '#FFFFFF', marginBottom:'10rem' }}>
        <Typography variant='h4'>Our Complete Products!!</Typography>
        <TabContext value={value} >
            <Box sx={{ pt: '5rem' }} >
            
                <TabList aria-label="example" onChange={handleChange} centered   >
                    <Tab sx={{ color: 'white' }} label='All Products' value='1' />
                    <Tab sx={{ color: 'white' }} label='UI/UX Design' value='2' />
                    <Tab sx={{ color: 'white' }} label='Creative' value='3' />
                    <Tab sx={{ color: 'white' }} label='Web Development' value='4' />
                  
                </TabList>
                
            </Box>
            <TabPanel value='1'> <PhotoGrid />  </TabPanel>
            <TabPanel value='2'> <PhotoGrid /> </TabPanel>
            <TabPanel value='3'> <PhotoGrid /> </TabPanel>
            <TabPanel value='4'> <PhotoGrid /> </TabPanel>
           
        </TabContext>

    </Box>

   
</Box>
  );
};

export default Portfolio;
