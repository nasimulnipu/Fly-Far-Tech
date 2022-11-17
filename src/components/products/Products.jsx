import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../footer/Footer'
import Appbar from '../navbar/Appbar'
import Product_pic from './Product_pic'
import { Typewriter } from 'react-simple-typewriter'
import MouseIcon from '@mui/icons-material/Mouse';
import MouseScroll from '../MouseScroll'
import { style } from '@mui/material/styles';


const Products = () => {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
   
    return (
        <Box >
            <Appbar />
           <MouseScroll/>
            <Box component= "img" src="/img/topVector.png" sx={{position:'absolute', left:'0', top:'0'}}/>
            {/* <Box component= "img" src="/img/middleVector.png" sx={{position:'absolute'}}/> */}
            {/* <Box component= "img" src="/img/rightVector.png" sx={{position:'absolute', right:'0'}}/> */}

            <Box sx={{ backgroundColor: "rgb(14, 13, 38)", padding: "50px 100px", color: '#FFFFFF', marginBottom:'10rem' }}>
                <Typography variant='h4'>Our Completed Products!!</Typography>
                <TabContext value={value} >
                    <Box sx={{ pt: '5rem'}} >
                    
                        <TabList aria-label="example" onChange={handleChange} centered   >
                            <Tab sx={{ color: 'white' }} label='All Products' value='1' />
                            <Tab sx={{ color: 'white' }} label='UI/UX Design' value='2' />
                            <Tab sx={{ color: 'white' }} label='Creative' value='3' />
                            <Tab sx={{ color: 'white' }} label='Web Development' value='4' />
                            <Tab sx={{ color: 'white' }} label='Mobile App Development' value='5' />
                            <Tab sx={{ color: 'white' }} label='ERP Software' value='6' />
                        </TabList>
                        
                    </Box>
                    <TabPanel value='1'> <Product_pic />  </TabPanel>
                    <TabPanel value='2'> <Product_pic /> </TabPanel>
                    <TabPanel value='3'> <Product_pic /> </TabPanel>
                    <TabPanel value='4'> <Product_pic /> </TabPanel>
                    <TabPanel value='5'> <Product_pic /> </TabPanel>
                    <TabPanel value='6'> <Product_pic /> </TabPanel>
                </TabContext>

            </Box>

            <Footer />
        </Box>
    )
}

export default Products