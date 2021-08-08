import React, { Component } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"


export default class SimpleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      adptiveWidth:true
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="img-max-height">
            <StaticImage src="../assets/slide1b.jpg" alt="" placeholder="blurred"
              style={{maxHeight:550}}/>
          </div>
          <div>
            <StaticImage src="../assets/slide2b.jpg" alt="" 
            style={{maxHeight:550}}/>
          </div>
          <div>
            <StaticImage src="../assets/slide3b.jpg" alt="" 
            style={{maxHeight:550}}/>
          </div>
        </Slider>
      </div>
    );
  }
}