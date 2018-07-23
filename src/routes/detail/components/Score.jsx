import React from 'react';
import './Score.css';
import Star from'../../../components/Star'

const Score = () => (
  <div className="score">
    <div className="score__top">
      <div className="module">
        <div className="module__value">
          9.3<Star value="9.3"></Star>
        </div>
        <div className="module__title">观众评分</div>
      </div>
      <div className="module">
        <div className="module__value">80%</div>
        <div className="module__title">微淘推荐度</div>
      </div>
      <div className="module">
        <div className="module__value">12345</div>
        <div className="module__title">想看人数</div>
      </div>
    </div>
    <div className="score__btn">
      <button className="button button--want"><i></i>想看</button>
      <button className="button button--seen"><i></i>看过</button>
    </div>
  </div>
);

export default Score;
