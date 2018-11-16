import React, { Component } from 'react';
import './aboutme.css';
import Amsterdam from '../assets/test.png';
import PatrikHogler from '../assets/patrikhogler.png';
import PatrikHogler2 from '../assets/putte.png';
import PatrikHogler3 from '../assets/putte2.png';



import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };
    return (
      <div className="slidercontainer">
        <Slider {...settings}>
          <div>
            <h3><img src={Amsterdam} className="avatar-img" /></h3>     
          </div>
          <div>
            <h3><img src={PatrikHogler} className="avatar-img" /></h3>  
          </div>
          <div>
            <h3><img src={PatrikHogler2} className="avatar-img" /></h3>        
          </div>
          <div>
            <h3><img src={PatrikHogler3} className="avatar-img" /></h3>      
          </div>
       
        </Slider>
      </div>
    );
  }
}

