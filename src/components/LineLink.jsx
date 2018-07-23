import React from 'react';
import PropTypes from 'prop-types';
import './LineLink.css'

const propTypes = {
    title : PropTypes.string.isRequired,
    extra : PropTypes.string,
    href : PropTypes.string.isRequired,
};


const LineLink = ({href , title , extra}) => {
    return (
        <a href="" className = "lineLink">
            <div className="lineLink__title">{title}</div>
            <div className="lineLink__extra">{extra}</div>
            <i className="lineLink__arrow"></i>
        </a>
    );
};


LineLink.propTypes = propTypes;


export default LineLink;
