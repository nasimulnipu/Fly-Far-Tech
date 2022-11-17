import React from 'react'
import MouseIcon from '@mui/icons-material/Mouse';
import { Box } from '@mui/material';

const MouseScroll = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', position: 'fixed', left: '3%',
    mt:'2rem'}}>
<Box sx={{borderLeft:'1px solid #4F76AE',
    height: '600px',
    ml:'12px',
    mt:'2rem',
  
}}>
</Box>
<MouseIcon sx={{color:'#FCAF17', left: '5%', pl: '2px',
    mt:'1rem'}}  />
</Box>
  )
}

export default MouseScroll