import React from 'react';
import './ScoreDistribute.css'
import Star from '../../../components/Star'

class ScoreDistribute extends React.Component {
  render() {
    return (
      <div className="scoreDistribute">
        <div className="score">
          <div className="score__value">9.3</div>
          <div className="score__desc">10000人评论</div>
        </div>
        <div className="distribute">
          <div className="distribute__item">
            <Star value={10} size={8}></Star>
            <div className="distribute__btm"></div>
            <div className="distribute__top" style={{"width":"2%"}}></div>
          </div>
          <div className="distribute__item">
            <Star value={8} size={8}></Star>
            <div className="distribute__btm"></div>
            <div className="distribute__top" style={{"width":"80%"}}></div>
          </div>
          <div className="distribute__item">
            <Star value={6} size={8}></Star>
            <div className="distribute__btm"></div>
            <div className="distribute__top" style={{"width":"80%"}}></div>
          </div>
          <div className="distribute__item">
            <Star value={4} size={8}></Star>
            <div className="distribute__btm"></div>
            <div className="distribute__top" style={{"width":"80%"}}></div>
          </div>
          <div className="distribute__item">
            <Star value={2} size={8}></Star>
            <div className="distribute__btm"></div>
            <div className="distribute__top" style={{"width":"80%"}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScoreDistribute;
