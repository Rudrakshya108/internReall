import React from "react";
import "./Slider.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images1.jpg'
import image2 from './images2.jpg'
import image3 from './images3.jpg'


export default function Slider() {
  return (
    <div className="slider">
    <div className="appKoPara"><p><strong>GET THE BEST</strong></p></div>
    <div className="sliderHeader">
        <h1>The Best Of Best You May Find Inside Us</h1>
    </div>
     <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image3} className="sliderimg" alt=""/>
     
    </AliceCarousel>
    </div>
  );
}
