import React from 'react'
import Spline from '@splinetool/react-spline';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';

function About() {
  
  
  return (
    <div className='spline-container'>
        <Spline scene="https://prod.spline.design/Ev2V7PfCI22LMLVO/scene.splinecode" />
        <Footer/>
    </div>
  )
}


export default About;