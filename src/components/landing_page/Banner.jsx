
import { Box,Grid, Typography } from '@mui/material';

import React from 'react';
import "./banner.css"

const Banner = () => {
  return (
    
     
     <Box sx={{ 
    
      backgroundColor: "rgb(14, 13, 38)",
      height:"90vh",
      color:'#FFFFFF',
      padding:"20px"
      
      }}>
         <Box  sx={{ 
      
          margin:"40px",
          padding:"0px 55px"
        }}>
            <Typography variant="h6" > We make it happen </Typography>
            </Box>
           <Grid container  sx={{margin:"50px",  padding:'40px'}}>
             <Grid item xs={4}  sx={{
               
              display:'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              }}>
                <Typography variant='h2' className = "title" >Website</Typography></Grid>
             <Grid item xs={2.5} sx={{
              display:'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginLeft: "-5px"

              
              }}>
                <Typography variant='h2' className = "title">Apps</Typography></Grid>
             <Grid item xs={5.5} sx={{
              display:'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
             
              }}>
                <Typography variant='h2' className = "title" >
                  Creative</Typography></Grid>
                {/* <img  src='./img/Vector.png' alt=''/> */}

           </Grid>

       

  
    </Box>
      
    
  )
}

export default Banner


