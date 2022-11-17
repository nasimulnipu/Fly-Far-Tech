import { Box, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import React  from 'react';
import { Link } from 'react-router-dom';
import { style } from '@mui/material/styles';

const Navigation = ({openDrawer,handleDrawerClose}) => {
  // console.log(openDrawer)
  return (
   <Drawer 
   open={openDrawer}
   onClose={()=>{
    handleDrawerClose()
   }}
   anchor='right'
  
   >
    <Box  sx={{background: "#FCAF17", height:'100vh',width:'55vw', display:'flex', gap:18, justifyContent:'center'}}>
      <Box >
         <List>
          <ListItem sx={{display:'flex', flexDirection:'column', alignItems:'flex-start',cursor:'pointer', gap:6, mr:3}}>
          <Typography  sx={{fontFamily:'sans-serif', fontWeight:'400', fontSize:'20px'}}> Social </Typography> 
          <Typography  sx={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}}> Facebook </Typography> 
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
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'500', fontSize:'50px'  }}> <Link style={{textDecoration:'none',color:'black'}} to="/">Home</Link> </Typography> 
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'500', fontSize:'50px'}}> <Link style={{textDecoration:'none',color:'black'}} to="/products">Products</Link>   </Typography>
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'500', fontSize:'50px' }}><Link style={{textDecoration:'none',color:'black'}} to="/services"> Services</Link>  </Typography>
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'500', fontSize:'50px' }}> <Link style={{textDecoration:'none',color:'black'}} to="/blogs"> Blogs </Link>  </Typography> 
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'500', fontSize:'50px' }}><Link style={{textDecoration:'none',color:'black'}} to="/team"> About Us </Link>  </Typography>
          <Typography sx={{fontFamily:'sans-serif', fontWeight:'500', fontSize:'50px'}}> <Link style={{textDecoration:'none',color:'black'}} to="/contact"> Contact Us  </Link>  </Typography> 
          </ListItem>
         </List>

      </Box>


    </Box>

   
    <Box  sx={{background: "#FCAF17", overflowY:'hidden', paddingLeft:'50px'}}>
      <Typography sx={{ display:'flex', flexDirection:'column',fontFamily:'sans-serif', fontWeight:'400', fontSize:'20px'}}>
        Get In Touch

        <a href='#' style={{
          fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px',textDecoration:'none',color:'black'
        }}>Info@flyfartech.com</a>
        <br/>
      </Typography>
    </Box>



   </Drawer>
    
   
  )
}

export default Navigation
