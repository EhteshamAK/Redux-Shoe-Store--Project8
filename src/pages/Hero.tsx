import React from 'react'
import './Hero.css';
import camel  from '../images/shoe.jpg'

const Hero = () => {
    return (
        <div className="hero">
          <img src={camel} alt="camel in the desert" id="heroImg" />
  
        </div>
    )
}

export default Hero
