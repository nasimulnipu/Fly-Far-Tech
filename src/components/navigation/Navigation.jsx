import { Box, Drawer, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';

const Navigation = () => {
  const [openDrawer, setOpenDrawer]= useState(true)
  return (
   <Drawer 
   open={false}
   anchor='right'
  
   >
    <Box  sx={{background: "#FCAF17", height:'100vh',width:'55vw', display:'flex', gap:8, justifyContent:'center'}}>
      <Box >
         <List>
          <ListItem sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', gap:2}}>
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'400', fontSize:'20px'}}> Social </Typography> 
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}}> Facebook </Typography> 
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}}> Instagram </Typography> 
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}}> Linkedin </Typography> 
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}}> Github </Typography> 
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}}> Behance </Typography>
          </ListItem>
         </List>
         

      </Box>

      <Box>
      <List>
          <ListItem sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', gap:2}}>
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'400', fontSize:'20px'}}> Menu </Typography>  
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'50px'}}> Home </Typography> 
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'50px'}}> Products </Typography>
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'50px'}}> Services </Typography>
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'50px'}}> About Us </Typography>
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'50px'}}> Contact Us </Typography> 
          </ListItem>
         </List>

      </Box>


    </Box>

   
    <Box  sx={{background: "#FCAF17", overflowY:'hidden', paddingLeft:'50px'}}>
      <Typography sx={{ display:'flex', flexDirection:'column',fontFamily:'sans-serif', fontWeight:'400', fontSize:'20px'}}>
        Get In Touch

        <Link sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}}>Info@flyfartech.com</Link>
        <br/>
      </Typography>
    </Box>



   </Drawer>
    
   
  )
}

export default Navigation
