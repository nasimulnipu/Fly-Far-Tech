import { Box } from '@mui/material';
import React from 'react';

import Appbar from '../navbar/Appbar';

import Discuss from './Discuss';
import Faq from './Faq';
import Footer from '../footer/Footer';
import InfoD from './InfoD';
import Portfolio from './portfolio/Portfolio';
import Services from './Services';
import Testimonial from './Testimonial';
import Banner from './banner/Banner';



const Home = () => {
  return (
    <Box>
    <Appbar/>
    {/* <Banner/> */}
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <InfoD/>
    <Faq/>
    <Discuss/>
    <Footer/>
 </Box>
  )
}

export default Home
