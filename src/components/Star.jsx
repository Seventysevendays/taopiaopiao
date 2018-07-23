import './Star.css';
import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ value, size = 15 }) => {
  const bgSize = `${size}px ${size}px`
  return (
    <div className="star" style={{ "height": size + "px", "width": size * 5 + "px" }}>
      <div className="star__top" style={{ "width": `${value * 10}%`, "backgroundSize": `${bgSize}` }}></div>
    </div>)
};

Star.proptypes ={
  value : PropTypes.number.isRequired,
  size : PropTypes.number
}
export default Star;
