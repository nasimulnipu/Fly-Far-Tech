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

const Tab2 = () => {
  const ariaLabel = {'aria-label' : 'input'}
  const [catagories, setcatagories] = React.useState("");

  const handleChange1 = (event) => {
    setcatagories(event.target.value);
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
          borderRadius: "10px",
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
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={catagories}
          onChange={handleChange1}
          label="Catagories"
          
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
          borderRadius: "10px",
        }}
      >
        <InputLabel
          sx={{ color:'#C7C7C7', pl: 2 }}
          id="demo-simple-select-standard-label"
        >
          
          Expected Project Delivery Time Frame ?
        </InputLabel>
        <Select
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={catagories}
          onChange={handleChange1}
          label="Catagories"
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
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={catagories}
          onChange={handleChange1}
          label="Catagories"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Web Development</MenuItem>
          <MenuItem value={20}>Mobile App Development</MenuItem>
          <MenuItem value={30}>ERP Software</MenuItem>
        </Select>
      </FormControl> 
      <Grid container sx={{ maxWidth: "100%",mt:'3rem' }}>
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
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE"  }} placeholder="Name" inputProps={ariaLabel} />
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
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE"  }} placeholder="Email" inputProps={ariaLabel} />
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
          <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE"  }} placeholder="Phone" inputProps={ariaLabel} />
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
        <Input sx={{color:'#C7C7C7', borderBottom:"1px solid #4F76AE", width:'80%'  }} placeholder="Project Description" inputProps={ariaLabel} />
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
