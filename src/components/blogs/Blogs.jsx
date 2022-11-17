import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from '../footer/Footer';
import Appbar from '../navbar/Appbar';

import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MouseIcon from '@mui/icons-material/Mouse';
import { Typewriter } from 'react-simple-typewriter'
import MouseScroll from '../MouseScroll';


const Blogs = () => {
  const cardInfo =[
      {image:"img/Rectangle 26.jpg ", title:"UI / UX DESIGN", text:"10 Ways to Take Your UI Design Game to the Next Level ! ", desc:"In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming "},
      { image:"img/Rectangle 26.jpg ", title:"UI / UX DESIGN", text:"10 Ways to Take Your UI Design Game to the Next Level ! ", desc:"In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming "},
      {image:"img/Rectangle 26.jpg ", title:"UI / UX DESIGN", text:"10 Ways to Take Your UI Design Game to the Next Level ! ", desc:"In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming "},
      {image:"img/Rectangle 26.jpg ", title:"UI / UX DESIGN", text:"10 Ways to Take Your UI Design Game to the Next Level ! ", desc:"In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming "},
  ];

  const renderCard= (card, index)=>{
  
    return(
      <Card sx={{ maxWidth: 340, background: ' linear-gradient(92.66deg, rgba(89, 88, 102, 0.175) 0.6%, rgba(89, 88, 102, 0.1) 99.86%)', backdropFilter: 'blur(50px)', borderRadius: '20px', mb:'20vh', mt:'10vh', height:'421px' }}>
      <CardMedia
        component="img"
        height='200'
        image={card.image}
        alt="green iguana"
        
      />
      <CardContent>
      <Typography gutterBottom variant="span" sx={{ color: '#FCAF17', fontSize:'15px', fontWeight:'600' }}>
                    {card.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" sx={{ color: '#FFFFFF',fontSize:'17px', fontWeight:'500' }}>
                    {card.text}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4F76AE', fontSize:'13px', fontWeight:'500' }}>
                    {card.desc}
                  </Typography>
                  <CardActions>
                    <RemoveRedEyeIcon sx={{ color: '#FCAF17' }} />
                    <Button size="small" sx={{ color: '#FCAF17',fontSize:'14px', fontWeight:'500' }}>100 reads</Button>
                  </CardActions>
      </CardContent>
      
    </Card>

    )
  }
  return (
    <Box sx={{ background: "rgb(14, 13, 38)",color: '#FFFFFF' }}>
      <Appbar />
           <Box component= "img" src="/img/topVector.png" sx={{position:'absolute', left:'0', top:'0'}}/>
            {/* <Box component= "img" src="/img/middleVector.png" sx={{position:'absolute'}}/>
            <Box component= "img" src="/img/rightVector.png" sx={{position:'absolute', right:'0'}}/> */}
  <MouseScroll/>
      <Box sx={{ padding: "50px 100px" }}>
        <Typography variant='h4'sx={{  p:'1rem 0rem'}} > Latest Blogs !!</Typography>

        <Grid container spacing={5}>
          <Grid item xs={7.5} direction='column'>
            <SearchIcon sx={{ fill: "#FCAF17", pt: '35px', cursor: 'pointer' }} />
            <TextField id="filled-basic" label='Search blogs, topics and more' variant="filled" sx={{ background: 'white', width: '90%', m: '15px' }} />
            <Card sx={{ maxWidth: '100%', ml: '38px', maxHeight: '258px', background: ' linear-gradient(92.66deg, rgba(89, 88, 102, 0.175) 0.6%, rgba(89, 88, 102, 0.1) 99.86%)', backdropFilter: 'blur(50px)', borderRadius: '10px', cursor:'pointer', position:'relative', zIndex:'3' }}>
              <Box sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="auto"
                  image="img/Rectangle 25.jpg"
                  sx={{}}
                />
                <CardContent>
                  <Typography gutterBottom variant="span" sx={{ color: '#FCAF17' }}>
                    UI / UX DESIGN
                  </Typography>
                  <Typography gutterBottom variant="h5" sx={{ color: '#FFFFFF' }}>
                    10 Ways to Take Your UI Design Game to the Next Level !
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4F76AE' }}>
                    In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming
                  </Typography>
                  <CardActions>
                    <RemoveRedEyeIcon />
                    <Button size="small" sx={{ color: '#4F76AE' }}>100 reads</Button>
                  </CardActions>
                </CardContent>
              </Box>


            </Card>

          </Grid>
          <Grid item xs={4.5}>
            <Card sx={{width:"35rem", mt:'1.5rem'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7vQznLKEfBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Card>
          </Grid>

        </Grid>




      </Box>


      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:3, position:'relative', zIndex:'3'}}>
        {cardInfo.map(renderCard)}
      </Box>

      <Footer />
    </Box>
  )
}

export default Blogs