import { Avatar, Box, Grid,  Typography } from '@mui/material';
import React from 'react';
import Footer from '../footer/Footer';
import Appbar from '../navbar/Appbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typewriter } from 'react-simple-typewriter';

import MouseScroll from '../MouseScroll';


const Team = () => {
  return (

    <Box >
      <Appbar />
      <MouseScroll/>
      
      <Box component= "img" src="/img/topVector.png" sx={{position:'absolute', left:'0', top:'0'}}/>
      <Box sx={{ backgroundColor: "rgb(14, 13, 38)", padding: "50px 100px", color: '#FFFFFF', overflowY: 'hidden' }}>
        <Box sx={{pt:'10px', pb:'20px'}}>
        <Typography variant='h4' sx={{ pb:'1rem'}}>Our Energetic Team !!
          </Typography>
        <Typography variant='span'sx={{ color:'#4F76AE'}}>In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming</Typography>
        </Box>import MouseScroll from './../MouseScroll';


      

        <Grid container spacing={2} >
         
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', margin: '30px', gap: 3 }}>
            <Avatar sx={{ width: 80, height: 80, pt:'15px'}} src='/img/profile.png' />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant='span' sx={{fontWeight:'400', fontSize:'18px'}}>Back End Engineer</Typography>
              <Typography variant='h3' sx={{fontWeight:'500', fontSize:'35px', color: '#FCAF17' }}>Kayes Fahim</Typography>
              <Typography variant='span' sx={{fontWeight:'500', fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis faucibus ac tellus nunc. Urna dolor, lorem vel et id viverra faucibus. Scelerisque sem malesuada vitae, cursus bibendum tempor et.</Typography>
              <Box sx={{ cursor: 'pointer'}}>
                <FacebookIcon sx={{pr:'10px'}} />
                <GitHubIcon sx={{pr:'10px'}} />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', margin: '30px', gap: 3 }}>
            <Avatar sx={{ width: 80, height: 80, pt:'15px'}} src='/img/profile.png' />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant='span' sx={{fontWeight:'400', fontSize:'18px'}}>UI Engineer</Typography>
              <Typography variant='h3' sx={{fontWeight:'500', fontSize:'35px', color: '#FCAF17' }}>Syed Afridi</Typography>
              <Typography variant='span' sx={{fontWeight:'500', fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis faucibus ac tellus nunc. Urna dolor, lorem vel et id viverra faucibus. Scelerisque sem malesuada vitae, cursus bibendum tempor et.</Typography>
              <Box sx={{ cursor: 'pointer'}}>
                <FacebookIcon sx={{pr:'10px'}} />
                <GitHubIcon sx={{pr:'10px'}} />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>


          <Box sx={{ display: 'flex', margin: '30px', gap: 3 }}>
            <Avatar sx={{ width: 80, height: 80, pt:'15px'}} src='/img/profile.png' />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant='span' sx={{fontWeight:'400', fontSize:'18px'}}>Front End Engineer</Typography>
              <Typography variant='h3' sx={{fontWeight:'500', fontSize:'35px', color: '#FCAF17' }}>Khadem Islam</Typography>
              <Typography variant='span' sx={{fontWeight:'500', fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis faucibus ac tellus nunc. Urna dolor, lorem vel et id viverra faucibus. Scelerisque sem malesuada vitae, cursus bibendum tempor et.</Typography>
              <Box sx={{ cursor: 'pointer'}}>
                <FacebookIcon sx={{pr:'10px'}} />
                <GitHubIcon sx={{pr:'10px'}} />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>

        </Grid>

           <Box sx={{borderLeft:'1px solid #4F76AE',
              height: '600px',
              position: 'absolute',
              left: '50%',
              mt:'2rem',
              
              
          
          }}></Box>

        <Grid item xs={6}>
        <Box sx={{ display: 'flex', margin: '30px', gap: 3 }}>
            <Avatar sx={{ width: 80, height: 80, pt:'15px'}} src='/img/profile.png' />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant='span' sx={{fontWeight:'400', fontSize:'18px'}}>Front End Engineer</Typography>
              <Typography variant='h3' sx={{fontWeight:'500', fontSize:'35px', color: '#FCAF17' }}>Sohan Islam</Typography>
              <Typography variant='span' sx={{fontWeight:'500', fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis faucibus ac tellus nunc. Urna dolor, lorem vel et id viverra faucibus. Scelerisque sem malesuada vitae, cursus bibendum tempor et.</Typography>
              <Box sx={{ cursor: 'pointer'}}>
                <FacebookIcon sx={{pr:'10px'}} />
                <GitHubIcon sx={{pr:'10px'}} />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>


          <Box sx={{ display: 'flex', margin: '30px', gap: 3 }}>
            <Avatar sx={{ width: 80, height: 80, pt:'15px'}} src='/img/profile.png' />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant='span' sx={{fontWeight:'400', fontSize:'18px'}}>Front End Engineer</Typography>
              <Typography variant='h3' sx={{fontWeight:'500', fontSize:'35px', color: '#FCAF17' }}>Uzzal Hossain</Typography>
              <Typography variant='span' sx={{fontWeight:'500', fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis faucibus ac tellus nunc. Urna dolor, lorem vel et id viverra faucibus. Scelerisque sem malesuada vitae, cursus bibendum tempor et.</Typography>
              <Box sx={{ cursor: 'pointer'}}>
                <FacebookIcon sx={{pr:'10px'}} />
                <GitHubIcon sx={{pr:'10px'}} />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>


          <Box sx={{ display: 'flex', margin: '30px', gap: 3 }}>
            <Avatar sx={{ width: 80, height: 80, pt:'15px'}} src='/img/profile.png' />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant='span' sx={{fontWeight:'400', fontSize:'18px'}}>Back End Engineer</Typography>
              <Typography variant='h3' sx={{fontWeight:'500', fontSize:'35px', color: '#FCAF17' }}>Parvaz Reza</Typography>
              <Typography variant='span' sx={{fontWeight:'500', fontSize:'14px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis faucibus ac tellus nunc. Urna dolor, lorem vel et id viverra faucibus. Scelerisque sem malesuada vitae, cursus bibendum tempor et.</Typography>
              <Box sx={{ cursor: 'pointer'}}>
                <FacebookIcon sx={{pr:'10px'}} />
                <GitHubIcon sx={{pr:'10px'}} />
                <LinkedInIcon />
              </Box>
            </Box>
          </Box>

        </Grid>
        </Grid>
      




      </Box>

      <Footer />

    </Box>
  )
}

export default Team
