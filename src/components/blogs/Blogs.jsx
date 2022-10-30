import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from '../footer/Footer';
import Appbar from '../navbar/Appbar';
import SearchBar from "react-material-ui-searchbar";
import SearchIcon from '@mui/icons-material/Search'; 


const Blogs = () => {
  return (
    <Box sx={{background: "rgb(14, 13, 38)", color:'#FFFFFF'}}>
        <Appbar/>

        <Box sx={{padding: "50px 100px", color:'#FFFFFF'}}>
          <Typography variant='h3'>Latest Blogs !!</Typography>
         
          <SearchBar>
            <SearchIcon/>
          </SearchBar>
          
        </Box>

        <Footer/>
    </Box>
  )
}

export default Blogs