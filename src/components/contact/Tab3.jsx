import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import Input from "@mui/material/Input";
import Contact from "./Contact";
import { Container } from "@mui/system";
import { useState } from "react";

const Tab3 = () => {
  const ariaLabel = { "aria-label": "input" };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleForm = (e) => {
    console.log(name, email, phone, subject, description);
    e.preventDefault();
  };

  return (
    <Box container maxWidth={"xl"} style={{ marginTop: "40px" }}>
      <form onSubmit={handleForm}>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Input
              required
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              inputProps={ariaLabel}
            />
          </Grid>
          <Grid item md={4}>
            <Input
              required
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              inputProps={ariaLabel}
            />
          </Grid>

          <Grid item md={4}>
            <Input
              required
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              placeholder="Phone"
              inputProps={ariaLabel}
            />
          </Grid>
          <Grid item md={7}>
            <Input
              required
              onChange={(e) => setSubject(e.target.value)}
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              placeholder="Subject"
              inputProps={ariaLabel}
            />
          </Grid>
          <Grid item md={12}>
            <Input
              required
              onChange={(e) => setDescription(e.target.value)}
              sx={{
                color: "#C7C7C7",
                borderBottom: "1px solid #4F76AE",
                width: "100%",
              }}
              placeholder="Project Description"
              inputProps={ariaLabel}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="text"
            type="submit"
            sx={{ color: "#FCAF17", mt: "2rem", textTransform: "capitalize" }}
          >
            Submit Query
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Tab3;
