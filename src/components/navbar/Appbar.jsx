import { Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material';
import React from 'react';
import Navigation from '../navigation/Navigation';
import { useState } from 'react';

const Appbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }
  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }
  return (
    <Box>
      <AppBar component="nav" position="fixed" sx={{ backgroundColor: "rgb(14, 13, 38)", padding: "0px 80px"}}>
        <Toolbar>
          <Link href='/' sx={{
            marginTop: "20px",
            flexGrow: 1,

          }}>
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
        <Navigation openDrawer={openDrawer} handleDrawerClose={handleDrawerClose} />
      </AppBar>
    </Box>
  )
}

export default Appbar
