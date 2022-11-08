
import { Box,Grid, Typography } from '@mui/material';

import React from 'react';
import "./banner.css";

import { Typewriter } from 'react-simple-typewriter';
import { gsap } from 'gsap';



const Banner = () =>  {
 
  var cursor = document.querySelector('.cursor'),
  //  cursorScale = document.querySelector('.cursor-scale'),
   
    mouseX = 0,
    mouseY = 0


gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    gsap.set(cursor,{
      css:{
        left: mouseX,
        top: mouseY
      }
    })
  }
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY
});


// cursorScale.forEach(link => {
//   link.addEventListener('mouseleave', () => {
//       cursor.classList.remove('grow');
      
//   });
//   link.addEventListener('mousemove', () => {
//       cursor.classList.add('grow');
     
//   });
// });
  return (
    
     
     <Box  sx={{ 
    
      backgroundColor: "rgb(14, 13, 38)",
      height:"90vh",
      color:'#FFFFFF',
      padding:"20px"
      
      }}>
         <Box  sx={{ 
      
          margin:"40px",
          padding:"0px 55px"
        }}>
            <Typography variant="h4"> <Typewriter
            words={['We make it happen']}
            loop={4}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={70}
            delaySpeed={1000}
          /> </Typography>
            </Box>
            <div className='cursor'> </div>
            <Grid container  sx={{margin:"50px",  padding:'40px'}}>
             <Grid item xs={4}  sx={{
               
              display:'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              }}>
                <Typography variant='h2' className = "cursor-scale title1" sx={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", WebkitBackgroundClip:'text', WebkitTextStroke:'1px white', WebkitTextFillColor:'transparent', fontSize:'100px',marginRight:'50px'}} >Website</Typography></Grid>
             <Grid item xs={2.5} sx={{
              display:'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginLeft: "-5px"

              
              }}>
                <Typography variant='h2' sx={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", WebkitBackgroundClip:'text', WebkitTextStroke:'1px white', WebkitTextFillColor:'transparent', fontSize:'100px',marginRight:'50px'}}  className = " title2">Apps</Typography></Grid>
             <Grid item xs={5.5} sx={{
              display:'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
             
              }}>
                <Typography variant='h2' sx={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", WebkitBackgroundClip:'text', WebkitTextStroke:'1px white', WebkitTextFillColor:'transparent', fontSize:'100px',marginRight:'50px'}}   className = "title3" >
                  Creative</Typography></Grid>
                

           </Grid>
            
          

       

  
    </Box>
      
    
  )
}

export default Banner


