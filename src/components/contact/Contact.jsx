
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Footer from '../footer/Footer'
import Appbar from '../navbar/Appbar'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import { Typography } from '@mui/material';

import MouseScroll from '../MouseScroll'



const Contact = () => {
    const [value, setValue] = React.useState('1');
    

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box >
        <Appbar/>
        <MouseScroll/>
        {/* <Box component= "img" src="/img/topVector.png" sx={{position:'absolute', left:'0', top:'0', zIndex:'1'}}/> */}
            {/* <Box component= "img" src="/img/middleVector.png" sx={{position:'absolute'}}/>
            <Box component= "img" src="/img/rightVector.png" sx={{position:'absolute', right:'0'}}/> */}
        <Box sx={{ width: '100%', typography: 'body1', backgroundColor: "rgb(14, 13, 38)", padding: "5rem 7rem", color: '#FFFFFF' }}>
        <Typography variant="h4"sx={{
          fontWeight:'400',
          fontSize:'50px',
          pb:'1rem'
        }}> Contact Us </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"  >
            <Tab sx={{color:'#4F76AE'}} label="Pre Sales" value="1" />
            <Tab  sx={{color:'#4F76AE'}} label="Project Proposal" value="2" />
            <Tab  sx={{color:'#4F76AE'}} label="Other" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">  <Tab1/> </TabPanel>
        <TabPanel value="2"> <Tab2/> </TabPanel>
        <TabPanel value="3"> <Tab3/> </TabPanel>
      </TabContext>
    </Box>
        <Footer/>
    </Box>
  )
}

export default Contact