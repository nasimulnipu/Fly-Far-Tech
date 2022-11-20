import React from "react";
import Input from '@mui/material/Input';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Button,
} from "@mui/material";

const Tab2 = () => {
  const ariaLabel = {'aria-label' : 'input'}
  const [catagories1, setcatagories1] = React.useState("");

  const handleChange1 = (event) => {
    setcatagories1(event.target.value);
  };
  const [catagories2, setcatagories2] = React.useState("");

  const handleChange2 = (event) => {
    setcatagories2(event.target.value);
  };
  const [catagories3, setcatagories3] = React.useState("");

  const handleChange3 = (event) => {
    setcatagories3(event.target.value);
  };
  return (
     <Box>
      <FormControl
        variant="standard"
        sx={{
          mb: 1,
          minWidth: "35%",
          borderBottom:"1px solid #4F76AE",
          backdropFilter: "blur",
          mr: 2,
          
        }}
      >
        <InputLabel
          sx={{ color:'#C7C7C7', pl: 2 }}
          id="demo-simple-select-standard-label"
        >
          
          What type of project you want to be developed?
        </InputLabel>                                                         
        <Select
       
          value={catagories1}
          onChange={handleChange1}
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
       <FormControl
        variant="standard"
        sx={{
          mb: 1,
          minWidth: "35%",
          borderBottom:"1px solid #4F76AE",
          backdropFilter: "blur",
          
        }}
      >
        <InputLabel
          sx={{ color:'#C7C7C7', pl: 2 }}
          id="demo-simple-select-standard-label"
        >
          
          Expected Project Delivery Time Frame ?
        </InputLabel>
        <Select
        
          value={catagories2}
          onChange={handleChange2}
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

      <FormControl
        variant="standard"
        sx={{
          mb: 1,
          minWidth: "35%",
          borderBottom:"1px solid #4F76AE",
          backdropFilter: "blur",
         
        }}
      >
        <InputLabel
          sx={{ color:'#C7C7C7', pl: 2 }}
          id="demo-simple-select-standard-label"
        >
          
          What is your approximate budget look like ?
        </InputLabel>
        <Select
          
          value={catagories3}
          onChange={handleChange3}
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
      <Grid container sx={{ maxWidth: "100%",mt:'3rem' ,ml:"0"}}>
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
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE", width:'100%'   }} placeholder="Name" inputProps={ariaLabel} />
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
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE", width:'100%'   }} placeholder="Email" inputProps={ariaLabel} />
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
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE",width:'100%'   }} placeholder="Phone" inputProps={ariaLabel} />
        </Grid>
      </Grid>
      <Box
        sx={{
          maxWidth: "90%",
          backgroundColor: "transparent",
          backdropFilter: "blur",
          borderRadius: "10px",
          pl: 2,
          pb: 1,
          mt: 2,
        }}
      >
        <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE", width:'83%'  }} placeholder="Project Description" inputProps={ariaLabel} />
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

export default Tab2;
