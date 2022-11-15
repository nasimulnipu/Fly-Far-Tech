import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  
  Typography,
} from "@mui/material";
import React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BrushIcon from "@mui/icons-material/Brush";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(14, 13, 38)",

        color: "#FFFFFF",
        padding: "20px",
      }}
    >
        <Box component= "img" src="/img/serviceVector.png" sx={{position:'absolute', left:'0', top:'0'}}/>
      <Box
        sx={{
          paddingLeft: "80px",
        }}
      >
        <Typography variant="h5" sx={{
          fontWeight:'400',
          fontSize:'29px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          color:'#FFFFFF',       
        }} >Our Services</Typography>
        <Typography variant="h3" sx={{
          fontWeight:'400',
          fontSize:'50px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          color: '#FFFFFF',   
        }}>We do everything!!</Typography>
        <Typography variant="span" sx={{
          fontWeight:'400',
          fontSize:'18px',
          color: '#4F76AE'
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, iste!
        </Typography>
        <Box sx={{
            display:'flex',
            alignItems:'flex-end',
            justifyContent:'end',
            cursor: 'pointer',
            gap:10,
            
        }}>
          <NavigateBeforeIcon />
          <NavigateNextIcon/>
        </Box>
        <Grid container spacing={5} sx={{ mt: "10px",mt:'20px',minWidth: '334px', minHeight:'390px'}}>
          <Grid item xs={3}>
            <Card
              sx={{ minWidth: '334px', background: "#FCAF17", borderRadius: "5px", color: "#0A254D", height:'350px', position:'relative', zIndex:'3'  }}
            >
              <ComputerIcon
                sx={{
                  background: "#FFFFFF",
                  color: "#0A254D",
                  width: "70px",
                  height: "36px",
                  mt: "25px",
                  mb:"30px",
                  borderRadius: "0px 10px 10px 0px",
                
                  
                }}
              />
              <CardContent>
                <Typography sx={{ fontSize: '19px', fontWeight: 600, mb:'10px' }} gutterBottom>
                  Web Development
                </Typography>

                <Typography variant="body2"sx={{textOverflow: 'ellipsis',fontSize: '13px', fontWeight: 500}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus adipisci, molestiae quia deleniti veritatis
                  perspiciatis modi nulla? Porro, ea autem?
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{color:'black',mt:'20px', fontWeight:'500', fontSize:'15px'}}>
                  Explore More
                  <TrendingFlatIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
               sx={{ minWidth: '334px', background:"#0A254D", borderRadius: "5px", color: "#FFFFFF", height:'350px', position:'relative', zIndex:'3'  }}
            >
              <PhoneAndroidIcon 
                sx={{
                  background: "#FCAF17",
                  color: "#0A254D",
                  width: "70px",
                  height: "36px",
                  mt: "25px",
                  mb:"30px",
                  borderRadius: "0px 10px 10px 0px",
                }}
              />
              <CardContent>
                <Typography sx={{ fontSize: '19px', fontWeight: 600, mb:'10px'}} gutterBottom>
                  Mobile App Development
                </Typography>

                <Typography variant="body2" sx={{textOverflow: 'ellipsis',fontSize: '13px', fontWeight: 500}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus adipisci, molestiae quia deleniti veritatis
                  perspiciatis modi nulla? Porro, ea autem?
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{color:'#FCAF17', mt:'20px', fontWeight:'500', fontSize:'15px'}}>
                  Explore More
                  <TrendingFlatIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
               sx={{ minWidth: '334px', background:"#0A254D", borderRadius: "5px", color: "#FFFFFF", height:'350px', position:'relative', zIndex:'3'  }}
            >
              <BrushIcon
                sx={{
                  background: "#FCAF17",
                  color: "#0A254D",
                  width: "70px",
                  height: "36px",
                  mt: "25px",
                  mb:"30px",
                  borderRadius: "0px 10px 10px 0px",
                }}
              />
              <CardContent>
                <Typography sx={{ fontSize: '19px', fontWeight: 600, mb:'10px' }} gutterBottom>
                  UI/UX Development
                </Typography>

                <Typography variant="body2" sx={{textOverflow: 'ellipsis',fontSize: '13px', fontWeight: 500}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus adipisci, molestiae quia deleniti veritatis
                  perspiciatis modi nulla? Porro, ea autem?
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{color:'#FCAF17',mt:'20px', fontWeight:'500', fontSize:'15px'}}>
                  Explore More
                  <TrendingFlatIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
            sx={{ minWidth: '334px', background:"#0A254D", borderRadius: "5px", color: "#FFFFFF", height:'350px', position:'relative', zIndex:'3'  }}
            >
              <AppRegistrationIcon
                sx={{
                  background: "#FCAF17",
                  color: "#0A254D",
                  width: "70px",
                  height: "36px",
                  mt: "25px",
                  mb:"30px",
                  borderRadius: "0px 10px 10px 0px",
                }}
              />
              <CardContent>
                <Typography sx={{ fontSize: '19px', fontWeight: 600, mb:'10px' }} gutterBottom>
                  Creative Design
                </Typography>

                <Typography variant="body2" sx={{textOverflow: 'ellipsis',fontSize: '13px', fontWeight: 500}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus adipisci, molestiae quia deleniti veritatis
                  perspiciatis modi nulla? Porro, ea autem?
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"sx={{color:'#FCAF17',mt:'20px', fontWeight:'500', fontSize:'15px'}}>
                  Explore More
                  <TrendingFlatIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{
            display:'flex',
            alignItems:'flex-end',
            justifyContent:'end',
            cursor: 'pointer',
            color:'#FCAF17',
            fontSize: 20,
            fontWeight:500,
            letterSpacing:'0.3rem',
            mt:'25px',
            textTransform:'uppercase'
        }}>Explore More</Box>
      </Box>
    </Box>
  );
};

export default Services;
