import { Box, Button, TextField, Typography } from '@mui/material';
import Input from '@mui/material/Input';
import React from 'react'

const Discuss = () => {
  const ariaLabel = {'aria-label' : 'input'}
  return (
    <Box sx={{ 
        background: "rgb(14, 13, 38)",
        
        color: "#FFFFFF",
        display:'flex',
        alignItems:'center',
        
        justifyContent:'center'
        
   }}>
    {/* <Box component= "img" src="/img/discussVector.png" sx={{position:'absolute', left:'0', bottom:'0'}}/> */}
        <Box sx={{ 
         margin:'60px 0px',
         background:
         "linear-gradient(92.66deg, rgba(89, 88, 102, 0.175) 0.6%, rgba(89, 88, 102, 0.1) 99.86%)",
         backdropFilter: "blur(50px)",
         padding: '20px',
         width:'60%',
         display:'flex',
         flexDirection:'column',
       
         
    }}>
      
        <Box>
           <Typography variant='h5' sx={{color:'#0061AF',fontSize:'35px',fontWeight:'500',mb:'10px'}}>Discuss a project</Typography> 
           <Typography variant='span'sx={{fontSize:'15px',fontWeight:'400'}}>Request a development cost assment for your IT product</Typography>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'inherit',
            justifyContent:'space-between',
            gap:3,
            margin:'30px 0px',
           
             
            }}>
       <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE" }} placeholder="Name" inputProps={ariaLabel} />
       <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE"}} placeholder="Email" inputProps={ariaLabel} />
       <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE"}} placeholder="Phone" inputProps={ariaLabel} />
    
       
        
        </Box>
        <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE"}} placeholder="Tell us about your idea" inputProps={ariaLabel} />
        <Button sx={{color:'#FCAF17',mt:'15px',display:'flex',  alignItems:'center', justifyContent:'flex-end'}} >Send message</Button>
       
    </Box>
   
    </Box>
    
  )
}

export default Discuss
