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
      adaptiveHeight: true,
      adptiveWidth:true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <StaticImage src="../assets/slide1a.jpg" alt="" />
          </div>
          <div>
            <StaticImage src="../assets/slide2a.jpg" alt="" />
          </div>
          <div>
            <StaticImage src="../assets/slide3a.jpg" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}