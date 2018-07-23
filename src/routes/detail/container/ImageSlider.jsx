import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'
import PropTypes from 'prop-types'

class ImageSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: 1,
    }
  }
  changeIndex(index){
    this.setState({
      index: index + 1
    })
  }
  render() {
    const settings = {
      className : "imageSlider__box",
      afterChange : this.changeIndex.bind(this)
    }
    return (
      <div className="imageSlider" onClick={this.props.toggleImage}>
        <div className="imageSlider__index">
          {this.state.index} / 6
        </div>
        <Slider {...settings}>
          <div className="imageSlider__item">
            <img className="imageSlider__image" src="/source/image/asset1.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__image" src="/source/image/asset2.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__image" src="/source/image/asset3.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__image" src="/source/image/asset4.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__image" src="/source/image/asset5.jpeg" alt=""/>
          </div>
          <div className="imageSlider__item">
            <img className="imageSlider__image" src="/source/image/asset6.jpeg" alt=""/>
          </div>
        </Slider>
      </div>
    )
  }
}

ImageSlider.propTypes = {
  toggleImage: PropTypes.func.isRequired,
}
export default ImageSlider;
