import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Person3Icon from "@mui/icons-material/Person3";
import ApiIcon from "@mui/icons-material/Api";

const InfoD = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(14, 13, 38)",
        color: "#FFFFFF",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
      }}
    >
      <Box component= "img" src="/img/infoVector.png" sx={{position:'absolute', left:'0'}}/>
      <Box
        sx={{
          background:
            "linear-gradient(92.66deg, rgba(89, 88, 102, 0.175) 0.6%, rgba(89, 88, 102, 0.1) 99.86%)",
          backdropFilter: "blur(50px)",
          display: "flex",
          flexDirection: "column",
          gap:4,
          width:'75%',
          padding:'20px',
          margin:'80px'
        }}
      >
        <Typography variant="h4" sx={{textAlign:'end',fontWeight:'500', fontSize:'35px'}}>We have great achivement to show</Typography>
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-start',
            gap:6,
            
        }}>
        <Box>
          <AccountTreeIcon />
          <hr width='48px'color=" #0061AF"/>
          <Typography variant="h4">1780+</Typography>
          <Typography variant="span" sx={{color:'#FCAF17'}}>Completed Projects</Typography>
        </Box>
        <Box>
          <Person3Icon />
          <hr width='48px'color=" #0061AF"/>
          <Typography variant="h4">850</Typography>
          <Typography variant="span" sx={{color:'#FCAF17'}}>World Wide Clients</Typography>
        </Box>
        <Box>
          <ApiIcon />
          <hr width='48px'color=" #0061AF"/>
          <Typography variant="h4">50</Typography>
          <Typography variant="span" sx={{color:'#FCAF17'}}>Software Engineers</Typography>
        </Box>
        </Box>
      

        <Box sx={{
            display:'flex',
            felxDirection: 'row',
            alignItems:'center',
            justifyContent:'flex-end',
            gap:5,
        }}>
          <Typography variant="span">Need any Software, API Solutions??</Typography>
          <Typography variant="h5" sx={{color:'#FCAF17', cursor:'pointer'}}>Call Us Now</Typography>

          <Button variant="contained" color="success">
            DISCUSS PROJECT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoD;
