
import { Avatar, Box, Rating, Typography } from '@mui/material'
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Testimonial = () => {
  const [value, setValue] = React.useState(5);
  return (
    <Box sx={{ backgroundColor: "rgb(14, 13, 38)",color: "#FFFFFF",}}>

       

       <Box  sx={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', mt:'80px'}}>
       
        <Typography variant='h5' sx={{fontWeight:'400', fontSize:'29px'}}>Testimonial</Typography>
        <Typography variant='h2' sx={{fontWeight:'400', fontSize:'50px'}}>What's Our Client Say!!</Typography>
        <Typography variant='span' sx={{fontWeight:'400', fontSize:'18px', color: '#4F76AE'}}>This is what we did in each section</Typography>
       </Box>

       <Box  sx={{
        '& > legend': { mt: 2 },
         textAlign: 'center',
         margin:'10px'
      }}>
       <Rating  name="star" value={value}  readOnly />
      </Box>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:20 }}>
        <Box>
           <ArrowBackIosIcon sx={{cursor:'pointer'}}/>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'50%', margin:'20px 0px', gap:1}}>
        
            <Typography variant='span' sx={{mb:'15px', textAlign:'center',fontWeight:'300', fontSize:'18px', color:"#FFFFFF"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sunt repudiandae placeat nesciunt recusandae blanditiis sit deserunt optio ullam dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat accusamus quisquam reprehenderit perspiciatis officiis similique maxime consequatur quis libero!</Typography>
            
            <Avatar alt='avatar' src='img/avataaars.png' />
            <Typography>Syed Afridi</Typography>
            <Typography variant='span' sx={{fontWeight:'400', fontSize:'18px', color: '#4F76AE'}}>CEO, XYZ Company</Typography>
            
            
            {/* <Box component= "img" src="/img/testimonialVector.png" sx={{position:'absolute', right:'0'}}/> */}
           
        </Box>
        <Box>
            <ArrowForwardIosIcon sx={{cursor:'pointer'}}/>
        </Box>

      </Box>

    </Box>
  )
}

export default Testimonial
