import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Homepage from '../Homepage';

function Home() {
  return (
    <>
      <Homepage />
      <HeroSection />
      <Cards /> 
      <Footer />
    </>
  );
}

export default Home;