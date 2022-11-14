import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import Home from './components/landing_page/Home';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Team from './components/team/Team';
import Products from './components/products/Products';
import Blogs from './components/blogs/Blogs';
import Contact from './components/contact/Contact';
import Service from './components/services/Service';
import Banner from './components/landing_page/banner/Banner';


 

const App = () => {
  return (
    <Router>
    <Box>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Service/>}/>
        
      </Routes>
      
    </Box>
    </Router>
  )
}

export default App

