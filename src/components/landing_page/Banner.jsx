
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import "./banner.css";
import { Typewriter } from 'react-simple-typewriter';
import { gsap } from "gsap";




const Banner = () => {

  const cursor = document.querySelector(".cursor");
  const cursorMedias = document.querySelectorAll(".cursor_media");
  const links = document.querySelectorAll(".link");

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    scale: 0
  });
  
  const setCursorX = gsap.quickTo(cursor, "x", {
    duration: 0.6,
    ease: "expo"
  });
  
  const setCursorY = gsap.quickTo(cursor, "y", {
    duration: 0.6,
    ease: "expo"
  });
  
  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  
  const tl = gsap.timeline({
    paused: true
  });
  
  tl.to(cursor, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "expo.inOut"
  });
  
  links.forEach((link, i) => {
    link.addEventListener("mouseover", () => {
      cursorMedias[i].classList.add("active");
      tl.play();
    });
  });
  
links.forEach((link, i) => {
  link.addEventListener("mouseout", () => {
      tl.reverse();
      cursorMedias[i].classList.remove("active");
    });
  });
  
 
 
 
  //    cursorScale = document.querySelector('.cursor-scale'),

  //     mouseX = 0,
  //     mouseY = 0


  // gsap.to({}, 0.016, {
  //   repeat: -1,
  //   onRepeat: function() {
  //     gsap.set(cursor,{
  //       css:{
  //         left: mouseX,
  //         top: mouseY
  //       }
  //     })
  //   }
  // });

  // window.addEventListener("mousemove", function (e) {
  //   mouseX = e.clientX;
  //   mouseY = e.clientY
  // });


  // cursorScale.forEach(link => {
  //   link.addEventListener('mouseleave', () => {
  //       cursor.classList.remove('grow');

  //   });
  //   link.addEventListener('mousemove', () => {
  //       cursor.classList.add('grow');

  //   });
  // });
  return (


    <Box sx={{

      backgroundColor: "rgb(14, 13, 38)",
      height: "90vh",
      color: '#FFFFFF',
      padding: "20px"

    }}>
      <Box sx={{

        margin: "40px",
        padding: "0px 55px"
      }}>
        <Typography variant="h4"> <Typewriter
          words={['We make it happen']}
          loop={4}
          cursor
          cursorStyle='_'
          typeSpeed={80}
          deleteSpeed={70}
          delaySpeed={1000}
        /> </Typography>
      </Box>
      <Box className='cursor'>
        <img src='img/Ellipse 1.png' className='cursor_media' alt='cursor_media' />
        <img src='img/Ellipse 2.png' className='cursor_media' alt='cursor_media' />
        <img src='img/Ellipse 3.png' className='cursor_media' alt='cursor_media' />
      </Box>

      <Grid container sx={{ margin: "50px", padding: '40px' }}>
        <Grid item xs={4} sx={{

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <Typography variant='span' sx={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", WebkitBackgroundClip: 'text', WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent', fontSize: '100px', marginRight: '50px' }} > <a className='link' href='/'>Website</a>


          </Typography>
        </Grid>
        <Grid item xs={2.5} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: "-5px"


        }}>
          <Typography variant='span' sx={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", WebkitBackgroundClip: 'text', WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent', fontSize: '100px', marginRight: '50px' }} > <a className='link' href='/'>App</a>


          </Typography></Grid>
        <Grid item xs={5.5} sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',

        }}>
          <Typography variant='span' sx={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", WebkitBackgroundClip: 'text', WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent', fontSize: '100px', marginRight: '50px' }} > <a className='link' href='/'>Creative</a>

          </Typography></Grid>


      </Grid>






    </Box>


  )
}

export default Banner


