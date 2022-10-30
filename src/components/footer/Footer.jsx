import { Box, Link, Typography } from '@mui/material'
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ 
        background: "rgb(14, 13, 38)",
        color: "#FFFFFF",
      
        
   }}>
     <Box sx={{
        margin:'20px 150px',
     }}>
     <Link href='#'>
   <img src="img/FLYFARTECH.png" alt="" />
   </Link>
    

   <Box sx={{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between',
    mt:'10px',
    }}>
        
    <Box sx={{
          display:'flex',
          flexDirection:'column',
          gap:1,
    }}>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'17px',color:'#4F76AE'}}>Contact Us</Typography>
        <Typography variant='span'  sx={{fontWeight:'400',fontSize:'15px'}} >+880 138414454145</Typography>
        <Typography variant='span' sx={{fontWeight:'400',fontSize:'15px'}}>info@flyfartech</Typography>
        <Typography variant='span' sx={{fontWeight:'400',fontSize:'15px'}}>Ka 11/2A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229.</Typography>
    </Box>

    <Box  sx={{
          display:'flex',
          flexDirection:'column',
          gap:1,
    }}>
        <Typography variant='span'  sx={{fontWeight:'500',fontSize:'17px',color:'#4F76AE'}}>Product</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Web Applications</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Mobile Applications</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Travel API Soluations</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Maqnagement Softwares</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>ERP Softwares</Typography>
    </Box>
    <Box sx={{
          display:'flex',
          flexDirection:'column',
          gap:1,
    }}>
        <Typography variant='span'  sx={{fontWeight:'500',fontSize:'17px',color:'#4F76AE'}}>Resources</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Blogs</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Testimonials</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Complete Products</Typography>
    </Box>
    <Box sx={{
          display:'flex',
          flexDirection:'column',
          gap:1,
    }}>
        <Typography variant='span'  sx={{fontWeight:'500',fontSize:'17px',color:'#4F76AE'}}>Company</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Who We Are</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Leadership Team</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Careers</Typography>
        <Typography variant='span' sx={{fontWeight:'500',fontSize:'15px'}}>Contact Us</Typography>
    </Box>

   </Box>
   <br/>

   <Box sx={{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    mt:'20px',
   }}>
      <Typography variant='span' sx={{fontWeight:'400',fontSize:'18px'}}>© All Rights Reserved by FLYFARTECH</Typography>
      <Typography variant='span' sx={{fontWeight:'400',fontSize:'18px'}}>Privacy Policy</Typography>
      <Typography variant='span' sx={{fontWeight:'400',fontSize:'18px'}}>Terms of use</Typography>
      <Box sx={{
        color:'#FCAF17'
      }}>
      <FacebookIcon/>
      <GitHubIcon/>
      <LinkedInIcon/>
      </Box>
    
    </Box>  
    </Box>
      
    </Box>
  )
}

export default Footer
