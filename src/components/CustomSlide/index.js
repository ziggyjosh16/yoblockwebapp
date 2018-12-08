import React, { Component } from 'react'
import './CustomSlide.css'

export default class CustomSlide extends Component {
  render () {
    const { index, ...props } = this.props
    return (
      <div className='slide' {...props}>
        <img className='image' src={index} alt='' />
      </div>
    )
  }
}
