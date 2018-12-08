import React, { Component } from 'react'
import Slider from 'react-slick'
import CustomSlide from '../../components/CustomSlide/'
import CategoryTable from '../../components/CategoryTable/'
import HeroBanner from '../../components/HeroBanner/'
import './Home.css'
import './slick/slick.css'
import './slick/slick-theme.css'

export default class Home extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
    const urls = [require('../../media/cody-davis-253928-unsplash.jpg'),
      require('../../media/nikhil-mitra-631990-unsplash.jpg'),
      require('../../media/rawpixel-577482-unsplash.jpg'),
      require('../../media/steve-johnson-643285-unsplash.jpg')]
    return (
      <div className='main'>
        <div className='slider'>
          <Slider {...settings}>
            {urls.map((url, i) => <CustomSlide key={i} index={url} />)}
          </Slider>
          <div className='overlay-text'>Credibly restoring the creator patreon relationship</div>
        </div>
        <div className='hero-banner'>
          <HeroBanner />
        </div>
        <div className='category-table'>
          <CategoryTable />
        </div>
      </div>

    )
  }
}
