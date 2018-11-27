import React, {Component}from "react";
import Slider from "react-slick";
import CustomSlide from "../components/CustomSlide"
import "./Route1.css";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
    
export default class Route1 extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
      const urls = [require("../media/cody-davis-253928-unsplash.jpg"),
                    require("../media/nikhil-mitra-631990-unsplash.jpg"),
                    require("../media/rawpixel-577482-unsplash.jpg"),
                    require("../media/steve-johnson-643285-unsplash.jpg")];
      return (
        <div className="slider">
          <Slider {...settings}>
            {urls.map( url => <CustomSlide index={url}/> )}
          </Slider>
        </div>
      );
    }
  }
