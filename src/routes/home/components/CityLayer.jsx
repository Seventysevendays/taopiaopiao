import React, { Component } from 'react'
import './CityLayer.css'
import request from '../../../helpers/request'
import PropTypes from 'prop-types';

export default class CityLayer extends Component {
    state = {
        hot : [],
        all : {}
    }
    componentWillMount = () => {
      this.getdata()

    }

    getdata = async () =>{
        const data = await request('/city');
        const {hot , all}  = data;
        this.setState({
            hot,
            all
        })
    }
    render() {
      const {onClose , onSelect} = this.props;
      const {hot , all} = this.state;
      const alphabetKeys = Object.keys(all);
    return (
      <div className= "cityLayer">
        <div className="cityLayer__title">
            <div className="cityLayer__close" onClick = {onClose}>关闭</div>
            选择城市
        </div>

        <div className="cityLayer__content">
            <div className="cityBlock" id = "定位">
                <div className="cityBlock__label">定位城市</div>
                <div className="cityBlockWrap">
                    <div className="cityBlock__item" onClick = {()=>onSelect('杭州')}>杭州</div>
                </div>
            </div>
            <div className="cityBlock" id= "热门">
                <div className="cityBlock__label">热门城市</div>
                <div className="cityBlock__wrap">
                    {hot.map(item => <div key = {item.id} className="cityBlock__item" onClick = {()=>onSelect(item.regionName)}>{item.regionName}</div>)}
                </div>
            </div>
            {alphabetKeys.map(alphabet => {
                const citys = all[alphabet];
                return (
                    <div className="cityList" id = {alphabet} key = {alphabet}>
                        <div className="cityList__label">{alphabet}</div>
                        <ul className="cityList__wrap">
                            {citys.map(city =>
                                <li key = {city.cityCode} className="cityList__item" onClick = {()=>onSelect(city.regionName)}>{city.regionName}</li>
                            )}
                        </ul>
                    </div>)
            })}
        </div>
        <div className="cityLayer__index">
            <ul className="cityIndex__list">
                <li className="cityIndex__item"><a href="#定位">定位</a></li>
                <li className="cityIndex__item"><a href="#热门">热门</a></li>
                {alphabetKeys.map(item =>
                    <li key = {item} className="cityIndex__item"><a href={`#${item}`}>{item}</a></li>
                )}
            </ul>
        </div>
      </div>
    )
  }
}

CityLayer.protoType = {
    onClose : PropTypes.func.isRequired,
    onSelect : PropTypes.func.isRequired
}
