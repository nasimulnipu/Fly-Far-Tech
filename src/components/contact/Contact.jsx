import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, createTheme, Tab, ThemeProvider } from "@mui/material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../footer/Footer";
import Appbar from "../navbar/Appbar";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import { Typography } from "@mui/material";

import MouseScroll from "../MouseScroll";
import { Container } from "@mui/system";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "orange",
          height: 2,
        },
      },
    },
  },
});

const Contact = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Appbar />
      <MouseScroll />
      {/* <Box component= "img" src="/img/topVector.png" sx={{position:'absolute', left:'0', top:'0', zIndex:'1'}}/> */}
      {/* <Box component= "img" src="/img/middleVector.png" sx={{position:'absolute'}}/>
            <Box component= "img" src="/img/rightVector.png" sx={{position:'absolute', right:'0'}}/> */}
      <Container maxWidth="xl" style={{ padding: "0px 60px" }}>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            backgroundColor: "rgb(14, 13, 38)",
            padding: "5rem 1rem",
            color: "#FFFFFF",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "400",
              fontSize: "38px",
              pb: "1rem",
              fontFamily: "Poppins",
            }}
          >
            Let's Discuss On a Project
          </Typography>
          <ThemeProvider theme={theme}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    sx={{
                      color: "#fff",
                      textTransform: "capitalize",
                      paddingLeft: "0px",
                    }}
                    label="Pre Sales"
                    value="1"
                  />
                  <Tab
                    sx={{
                      color: "#fff",
                      textTransform: "capitalize",
                      paddingLeft: "0px",
                    }}
                    label="Project Proposal"
                    value="2"
                  />
                  <Tab
                    sx={{
                      color: "#fff",
                      textTransform: "capitalize",
                      paddingLeft: "0px",
                    }}
                    label="Other"
                    value="3"
                  />
                </TabList>
              </Box>
              <TabPanel value="1" style={{ padding: "0px" }}>
                <Tab1 />
              </TabPanel>
              <TabPanel value="2" style={{ padding: "0px" }}>
                <Tab2 />
              </TabPanel>
              <TabPanel value="3" style={{ padding: "0px" }}>
                <Tab3 />
              </TabPanel>
            </TabContext>
          </ThemeProvider>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default Contact;
