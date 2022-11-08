import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";

const Tab3 = () => {
  return (
    <Box>
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
        <TextField id="standard-basic" label="Subject" variant="standard" />
      </Box>
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

export default Tab3;
