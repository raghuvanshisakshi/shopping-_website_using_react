import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.jpg'
import arrow_icon from '../Assets/arrow_icon.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className  = 'hero'>
        <div className="hero-left">
        <h2>New Arrival Only</h2>
        <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>for everyOne</p>
            </div>
            <div className="hero-latest-btn"></div>
        </div>
        <div className="hero-right">
      <div>Latest Collection</div>
      <img src={arrow_icon} alt="" />
        </div>
      <div className="hero-right">
    <img src={hero_image} alt="" />
    </div>
    </div>
    // <div className="hero-right">

    // </div>
  ) 
}

export default Hero
