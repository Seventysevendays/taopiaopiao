import React from 'react'
import './Movieitem.css'
import PropTypes from 'prop-types';

const Movieitem = ({data}) => (
    <div className="movieItem">
        <div className="movieItem__poster">
            <img src={data.poster} alt=""/>
        </div>
        <div className="movieItem__detail">
            <div className="movieItem__name">{data.name}</div>
            <div className="movieItem__score">评分：<span>{data.score}</span></div>
            <div className="movieItem__director">导演：{data.director}</div>
            {data.actor && <div className="movieItem__actor">主演：{data.actor}</div>}
            <div className="movieItem__tag">
                {data.tags.map((tag,index) => {
                    if(index % 2){        
                        return  <span key = {index} className="tTag tTag--red">{tag}</span>
                    }      
                return  <span key = {tag} className="tTag tTag--blue">{tag}</span>
                })}
            </div>
        </div>
        <div className="movieItem__button">
            <button className="tBtn">购票</button>
            <span className="movieItem__price">9.9元起</span>
        </div>
    </div>
);

Movieitem.propTypes = {
    data :PropTypes.object.isRequired
};
export default Movieitem;
