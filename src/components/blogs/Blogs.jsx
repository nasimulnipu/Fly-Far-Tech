import { Button, Card, CardActions, CardContent, CardMedia, TextField, Typography, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from '../footer/Footer';
import Appbar from '../navbar/Appbar';

import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Typewriter } from 'react-simple-typewriter'


const Blogs = () => {
  const cardInfo =[
      {image:"img/Rectangle 26.jpg ", title:"UI / UX DESIGN", text:"10 Ways to Take Your UI Design Game to the Next Level ! ", desc:"In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming "},
      { image:"img/Rectangle 26.jpg ", title:"UI / UX DESIGN", text:"10 Ways to Take Your UI Design Game to the Next Level ! ", desc:"In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming "},
      {image:"img/Rectangle 26.jpg ", title:"UI / UX DESIGN", text:"10 Ways to Take Your UI Design Game to the Next Level ! ", desc:"In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming "},
      {image:"img/Rectangle 26.jpg ", title:"UI / UX DESIGN", text:"10 Ways to Take Your UI Design Game to the Next Level ! ", desc:"In any industry where the peoples behind a company are as important as the company itself. we love to show off the awesome people who are responsible for keeping our buisness booming "},
  ];

  const renderCard= (card, index)=>{
  
    return(
      <Card sx={{ maxWidth: 340, background: ' linear-gradient(92.66deg, rgba(89, 88, 102, 0.175) 0.6%, rgba(89, 88, 102, 0.1) 99.86%)', backdropFilter: 'blur(50px)', borderRadius: '20px', mb:'40vh', mt:'10vh' }}>
      <CardMedia
        component="img"
        height="auto"
        image={card.image}
        alt="green iguana"
        sx={{ml:'4'}}
      />
      <CardContent>
      <Typography gutterBottom variant="span" sx={{ color: '#FCAF17' }}>
                    {card.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" sx={{ color: '#FFFFFF' }}>
                    {card.text}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4F76AE' }}>
                    {card.desc}
                  </Typography>
                  <CardActions>
                    <RemoveRedEyeIcon />
                    <Button size="small" sx={{ color: '#4F76AE' }}>100 reads</Button>
                  </CardActions>
      </CardContent>
      
    </Card>

    )
  }
  return (
    <Box sx={{ background: "rgb(14, 13, 38)",color: '#FFFFFF' }}>
      <Appbar />

      <Box sx={{ padding: "50px 100px" }}>
        <Typography variant='h3' > <Typewriter
            words={['Latest Blogs !!']}
            loop={4}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={70}
            delaySpeed={1000}
          /> </Typography>

        <Grid container spacing={1}>
          <Grid item xs={6} direction='column'>
            <SearchIcon sx={{ fill: "#FCAF17", pt: '35px', cursor: 'pointer' }} />
            <TextField id="filled-basic" label='Search blogs, topics and more' variant="filled" sx={{ background: 'white', width: '90%', m: '15px' }} />
            <Card sx={{ maxWidth: '100%', ml: '38px', maxHeight: '258px', background: ' linear-gradient(92.66deg, rgba(89, 88, 102, 0.175) 0.6%, rgba(89, 88, 102, 0.1) 99.86%)', backdropFilter: 'blur(50px)', borderRadius: '10px', cursor:'pointer' }}>
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
          <Grid item xs={6}>
            <Card sx={{}}>
              <CardMedia
                component='iframe'
                title='test'
                src='https://www.youtube.com/watch?v=THL1OPn72vo'
                sx={{ height: '340px' }}
              />
            </Card>
          </Grid>

        </Grid>




      </Box>


      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:3}}>
        {cardInfo.map(renderCard)}
      </Box>

      <Footer />
    </Box>
  )
}

export default Blogs