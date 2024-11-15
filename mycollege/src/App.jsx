import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Programs/Program';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import footerAPI from './Data/data';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import { useState } from 'react';

const App = () => {
  const [playVideo, setPlayVideo] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subtitle='Our Programs' title='What We Offer'/>
      <Program/>
      <About setPlayVideo={setPlayVideo}/>
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='Testimonials' title='What student says'/>
      <Testimonials />
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      </div>
      <Footer footerAPI={footerAPI}/>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>
    </div>
  )
}

export default App
