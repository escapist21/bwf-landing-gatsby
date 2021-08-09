import React, { Component } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      // infinite: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      slidesToShow: 6,
      //  
      initialSlide: 1,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //   }
        // },
        {
          breakpoint: 600,
          settings: {
            dots:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
            <StaticImage src="../assets/BWF_partners_BiharGov.png" alt="" height={120}/>
          </div>
          <div>
            <StaticImage src="../assets/BWF_partners_Jeevika.png" alt="" height={120} />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partners_Nabard.png" alt="" height={120} />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partners_Birla.png" alt="" height={120} />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partners_JMFin.png" alt="" height={120} />
          </div>
          <div>
            <StaticImage src="../assets/BWF_partners_JharGov.png" alt="" height={120} />
          </div>
        </Slider>
      </div>
    );
  }
}