import React from "react";
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
  const [catagories, setcatagories] = React.useState("");

  const handleChange = (event) => {
    setcatagories(event.target.value);
  };
  return (
     <Box>
      <FormControl
        variant="standard"
        sx={{
          mb: 1,
          minWidth: "35%",
          background: "#0d66b3",
          backdropFilter: "blur",
          borderRadius: "10px",
          mr: 2,
        }}
      >
        <InputLabel
          sx={{ color: "black", pl: 2 }}
          id="demo-simple-select-standard-label"
        >
          
          What type of project you want to be developed?
        </InputLabel>                                                         
        <Select
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={catagories}
          onChange={handleChange}
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
          background: "#0d66b3",
          backdropFilter: "blur",
          borderRadius: "10px",
        }}
      >
        <InputLabel
          sx={{ color: "black", pl: 2 }}
          id="demo-simple-select-standard-label"
        >
          
          Expected Project Delivery Time Frame ?
        </InputLabel>
        <Select
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={catagories}
          onChange={handleChange}
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
          background: "#0d66b3",
          backdropFilter: "blur",
          borderRadius: "10px",
        }}
      >
        <InputLabel
          sx={{ color: "black", pl: 2 }}
          id="demo-simple-select-standard-label"
        >
          
          What is your approximate budget look like ?
        </InputLabel>
        <Select
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={catagories}
          onChange={handleChange}
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
      <Grid container sx={{ maxWidth: "100%" }}>
        <Grid
          item
          xs={3}
          sx={{
            background: "#0d66b3",
            backdropFilter: "blur",
            borderRadius: "10px",
            mr: 2,
            pl: 2,
            pb: 1,
          }}
        >
          <TextField id="standard-basic" label="Name" variant="standard" />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            background: "#0d66b3",
            backdropFilter: "blur",
            borderRadius: "10px",
            mr: 2,
            pl: 2,
            pb: 1,
          }}
        >
          <TextField id="standard-basic" label="Email" variant="standard" />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            background: "#0d66b3",
            backdropFilter: "blur",
            borderRadius: "10px",
            pl: 2,
            pb: 1,
          }}
        >
          <TextField id="standard-basic" label="Phone" variant="standard" />
        </Grid>
      </Grid>
      <Box
        sx={{
          maxWidth: "76%",
          background: "#0d66b3",
          backdropFilter: "blur",
          borderRadius: "10px",
          pl: 2,
          pb: 1,
          mt: 2,
        }}
      >
        <TextField
          id="standard-basic"
          label="Project Description"
          variant="standard"
        />
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
