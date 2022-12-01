import { Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Link, Toolbar } from "@mui/material";
import React from "react";
import Navigation from "../navigation/Navigation";
import { useState } from "react";
import { Container } from "@mui/system";

const Appbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <Box>
      <Container
        maxWidth="xl"
        style={{ padding: "0px 50px", paddingRight: "0px" }}
      >
        <AppBar
          component="nav"
          position="relative"
          sx={{
            backgroundColor: "transparent",
            zIndex: "2",
          }}
        >
          <Toolbar>
            <Link
              href="/"
              sx={{
                marginTop: "20px",
                flexGrow: 1,
                cursor: "pointer",
              }}
            >
              <img src="img/FLYFARTECH.png" alt="" />
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={handleDrawerOpen}
            >
              <Menu />
            </IconButton>
          </Toolbar>
          <Navigation
            openDrawer={openDrawer}
            handleDrawerClose={handleDrawerClose}
          />
        </AppBar>
      </Container>
    </Box>
  );
};

export default Appbar;
