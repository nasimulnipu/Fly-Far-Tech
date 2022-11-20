import React from "react";
import Input from '@mui/material/Input';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const Tab1 = () => {
  const ariaLabel = {'aria-label' : 'input'}
  const [catagories, setcatagories] = React.useState("");

  const handleChange = (event) => {
    setcatagories(event.target.value);
  };
  return (
    <Box>
      <FormControl
        variant="standard"
        sx={{
         
          minWidth: "40%",
          borderBottom:"1px solid #4F76AE",
          backdropFilter: "blur",
         
        }}
      >
        <InputLabel
          sx={{ color:'#C7C7C7', ml:'9px'}}
          id="demo-simple-select-standard-label"
        >
          
          Which Product we can help you with ?
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={catagories}
          onChange={handleChange}
          label="Catagories"
          sx={{color:"#ffffff"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Web Development</MenuItem>
          <MenuItem value={20}>Mobile App Development</MenuItem>
          <MenuItem value={30}>ERP Software</MenuItem>
        </Select>
      </FormControl>

      <Grid container sx={{ maxWidth: "100%", mt:'3rem' }}>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur",
            
             }}
        >
            <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE",width:'90%'   }} placeholder="Name" inputProps={ariaLabel} />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur",
            borderRadius: "10px",
           
          }}
        >
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE", width:'100%'  }} placeholder="Email" inputProps={ariaLabel} />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur",
            borderRadius: "10px",
            pl: 2,
            pb: 1,
            
          }}
        >
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE", width:'100%'  }} placeholder="Phone" inputProps={ariaLabel} />
        </Grid>
      </Grid>
      <Box
        sx={{
          maxWidth: "76%",
          backgroundColor: "transparent",
          backdropFilter: "blur",
          borderBottom:"1px solid #4F76AE",
       
          mt:'3rem'
        }}
      >
       <Input sx={{color:'#C7C7C7',  width: '90%',ml: 2 }} placeholder="Tell us about your Idea" inputProps={ariaLabel} />
      </Box>
      <Box
        sx={{
          maxWidth: "76%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          mt:'3rem'
        }}
      >
        <Button variant="text" sx={{ color: "#FCAF17", mt: 2 }}>
          Submit Query
        </Button>
      </Box>
    </Box>
  );
};

export default Tab1;
