import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Discuss = () => {
  return (
    <Box sx={{ 
        background: "rgb(14, 13, 38)",
        color: "#FFFFFF",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        
   }}>
        <Box sx={{ 
         margin:'60px 0px',
         background:
         "linear-gradient(92.66deg, rgba(89, 88, 102, 0.175) 0.6%, rgba(89, 88, 102, 0.1) 99.86%)",
         backdropFilter: "blur(50px)",
         padding: '20px',
         width:'60%',
       
         
    }}>
        <Box>
           <Typography variant='h5' sx={{color:'#0061AF'}}>Discuss a project</Typography> 
           <Typography variant='span'>Request a development cost assment for your IT product</Typography>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'inherit',
            justifyContent:'space-between',
            gap:3,
            margin:'30px 0px',
           
             
            }}>
        <TextField sx={{backgroundColor:'GrayText'}} id="standard-basic" label="Name" variant="standard" />
        <TextField sx={{backgroundColor:'GrayText'}}  id="standard-basic" label="Email" variant="standard" />
        <TextField sx={{backgroundColor:'GrayText'}}  id="standard-basic" label="Phone" variant="standard" />
        
        </Box>
        <TextField sx={{backgroundColor:'GrayText', width:'100%'}}  id="standard-basic" label="Tell us about your idea" variant="standard" />
        <Button sx={{color:'#FCAF17',mt:'15px'}} >Send message</Button>
    </Box>
    </Box>
    
  )
}

export default Discuss
