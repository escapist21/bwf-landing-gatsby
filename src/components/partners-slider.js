import React, { Component } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div className="container my-5 py-5">
        <div className="column">
                <p className="title has-text-centered pb-5 has-text-weight-light is-size-2">
                    OUR PARTNERS
                </p>
            </div>
        <Slider {...settings}>
          <div>
            <StaticImage src="../assets/BWF_partner_AB_Group.png" alt="" />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partner_JharGov.png" alt="" />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partner_BIHAR_GOV.png" alt="" />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partner_JEEVIKA.png" alt="" />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partner_JM_Fin.png" alt="" />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partner_NABARD.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}