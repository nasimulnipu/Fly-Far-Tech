import React from 'react';
import "./banner.css"
import { Box } from '@mui/material';

const Banner = () => {

    const [
        mousePosition,
        setMousePosition
      ] = React.useState({ x: null, y: null });

    React.useEffect(() => {
        const updateMousePosition = ev => {
          setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
          window.removeEventListener('mousemove', updateMousePosition);
        };
      }, []);

const mouseCursor = document.querySelector(".cursor");
const titleLinks = document.querySelector('.title-1');
const titleLinks_2 = document.querySelector('.title-2');
const titleLinks_3 = document.querySelector('.title-3');
const video_1 = document.querySelector('.video-1');
const video_2 = document.querySelector('.video-2');
const video_3 = document.querySelector('.video-3');


window.addEventListener('mousemove' , cursor);
function cursor(e){
    mouseCursor.style.top = (e.pageY) + 'px';
    mouseCursor.style.left = (e.pageX) + 'px';
    mouseCursor.style.display='block';
}


// titleLinks.addEventListener('mouseover', ()=>{
//     mouseCursor.classList.add('title-link-grow');
//     mouseCursor.classList.add('media-blend');
//     video_1.style.display="block";
//   })
//   titleLinks.addEventListener('mouseleave', ()=>{
//     mouseCursor.classList.remove('title-link-grow');
//     mouseCursor.classList.remove('media-blend');
//     video_1.style.display='none';
//   })
  
  
  
//   titleLinks_2.addEventListener('mouseover', ()=>{
//     mouseCursor.classList.add('title-link-grow');
//     mouseCursor.classList.add('media-blend');
//     video_2.style.display="block";
//   })
  
//   titleLinks_2.addEventListener('mouseleave', ()=>{
//     mouseCursor.classList.remove('title-link-grow');
//     mouseCursor.classList.remove('media-blend');
//     video_2.style.display='none';
//   })
  
  
  
//   titleLinks_3.addEventListener('mouseover', ()=>{
//     mouseCursor.classList.add('title-link-grow');
//     mouseCursor.classList.add('media-blend');
//     video_3.style.display="block";
//   })
//   titleLinks_3.addEventListener('mouseleave', ()=>{
//     mouseCursor.classList.remove('title-link-grow');
//     mouseCursor.classList.remove('media-blend');
//     video_3.style.display='none';
//   })
  
  return (
    <Box>

          <img className='headerBlur' src='./img/headerVector.png'/>
           <div className="cursor"> 
            <video className="video-1" src="/img/websites.mp4" muted autoplay loop></video>
            <video className="video-2" src="/img/branding.mp4 " muted autoplay loop></video>
            <video className="video-3" src="/img/apps.mp4 " muted autoplay loop></video>
    </div>

    
    <section className="header">
        <Box className="title">
            <div className="title-1">
                <p>We make it happen</p>
                <a href="/">Website</a>
            </div>   
            <a className="title-2" href="/">Apps</a>
            <a className="title-3" href="/">Branding</a>
        </Box>
    </section>

    </Box>
  
    
  )
}

export default Banner