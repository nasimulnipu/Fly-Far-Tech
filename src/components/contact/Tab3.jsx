import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import Input from '@mui/material/Input';

const Tab3 = () => {
  const ariaLabel = {'aria-label' : 'input'}
  return (
    <Box>
      <Grid container sx={{ maxWidth: "100%" }} >
        <Grid
          item
          xs={3}
          
        >
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE"  }} placeholder="Name" inputProps={ariaLabel} />
        </Grid>
        <Grid
          item
          xs={3}
         
        >
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE"}} placeholder="Email" inputProps={ariaLabel} />
        </Grid>
        <Grid
          item
          xs={3}
      
        >
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE" }} placeholder="Phone" inputProps={ariaLabel} />
        </Grid>
      </Grid>
      <Box
      sx={{ mt:'130px'}}
      >
       <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE",width:'80%'    }} placeholder="Subject" inputProps={ariaLabel} />
      </Box>
      <Box
       
      >
        <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE",width:'80%'  }} placeholder="Project Description" inputProps={ariaLabel} />
      </Box>
      <Box
        sx={{
          maxWidth: "76%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="text" sx={{ color: "#FCAF17", mt: 2 }}>
          Submit Query
        </Button>
      </Box>
    </Box>
  );
};

export default Tab3;
