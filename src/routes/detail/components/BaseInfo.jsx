import React from 'react';
import './BaseInfo.css'
import PropTypes from 'prop-types'

const BaseInfo = (props) => (
  <div className="baseInfo" onClick={props.toggleImage}>
    <div className="baseInfo__detail">
      <h3 className="baseInfo__name">唐人街探案</h3>
      <div className="baseInfo__subTitle">DetectiveChinatown 2</div>
      <div className="baseInfo__other">喜剧</div>
      <div className="baseInfo__other">中国大陆</div>
      <div className="baseInfo__other">2018年2月</div>
    </div>
    <div className="baseInfo__poster"style={{backgroundImage:"url(/source/movie/asset4.jpeg"}}></div>
  </div>
);

BaseInfo.propTypes = {
  toggleImage: PropTypes.func.isRequired,
}

export default BaseInfo;
