import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types'

import './Slide.css'
const PosterSlide = ({data}) => {
    const settings = {
        dots: true,
        autoplay: true,
        className: 'posterSlide',
        dotsClass: 'posterSlide__dots'
      };
    return(
        <Slider {...settings }>
            {
                data.map((item,index) =>
                <div key = {index}>
                    <img className= "posterSlide__image" src={item.image} alt=""/>
                </div>)
            }
        </Slider>
)};

PosterSlide.propTypes = {
    data : PropTypes.array.isRequired
}
export default PosterSlide;
