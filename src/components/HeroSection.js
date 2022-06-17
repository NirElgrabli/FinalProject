import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import CardItem from './CardItem.js';
import { Link } from 'react-router-dom';





function HeroSection() {
  


  return (
    <div className='hero-container'>
      
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>NEW CLOTHES WAITING FOR YOU</h1>
      <p>What are you waiting for?</p>

      <div className='hero-btns'>
        <Button
          component={Link} to="/Product"
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick='loadHtml("template","..\components\pages\AboutUs.html")'
          
        >
          GET STARTED
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          
        >
          WATCH THIS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );

}

export default HeroSection;