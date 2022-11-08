
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'
import Footer from '../footer/Footer'
import Appbar from '../navbar/Appbar'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'



const Contact = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box >
        <Appbar/>
        <Box sx={{ width: '100%', typography: 'body1', backgroundColor: "rgb(14, 13, 38)", padding: "50px 100px", color: '#FFFFFF' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"  >
            <Tab sx={{color:'#FFFFFF'}} label="Pre Sales" value="1" />
            <Tab  sx={{color:'#FFFFFF'}} label="Project Proposal" value="2" />
            <Tab  sx={{color:'#FFFFFF'}} label="Other" value="3" />
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