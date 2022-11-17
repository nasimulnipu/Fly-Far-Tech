import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react';
import "./product.css";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  
];


const PhotoGrid = () => {
  return (
    <Box sx={{display: 'flex', alignItem:'center', justifyContent:'center', background: 'rgb(14, 13, 38)'}}>
    <ImageList variant='standard' gap={18} cols={3} sx={{
     width:850, 
     height:350, 
    
     }} 
     >
      {itemData.map((image,index)=>(
       <ImageListItem className='imgItem' key={index}>
        <img src={image.img} alt={image.title} />
        <div className='desc'>
           <h3>UI/UX Design</h3>
           <h3>Foodie Restrurent</h3>
           <span>Lorem ipsum dolor sit amet,afafsafa aconsectetur adipiscing elit.</span>
           <a href='#'>
           <ArrowCircleRightIcon sx={{backgroundColor: '#FCAF17', borderRadius:'22px' }} fontSize='large'/>
           </a>
           
        </div>
       </ImageListItem>
       
      ))}
     </ImageList> 
    </Box>
  )
}

export default PhotoGrid
