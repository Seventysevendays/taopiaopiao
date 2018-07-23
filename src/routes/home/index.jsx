import React, { Component } from 'react';
import './index.css'
import Topbar from "./components/TopBar";
import Slide from "./components/Slide"
import Movieitem from './components/Movieitem'
import TabMenu from '../../components/TabMunu'
import CityLayer from './components/CityLayer'
import request from  '../../helpers/request'
import RenderToBody from '../../components/RenderToBody'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  state = {
    city : '',
    poster : [],
    movie :[],
    cityLayerVisible : false
  }
  showCityLayer = ()=>{
      this.setState({
        cityLayerVisible : true
      })
  }
  hideCityLayer = () =>{
      this.setState({
        cityLayerVisible : false
      })
  }
  onChangeCity = (city) =>{
    this.setState({
      city
    });
    this.hideCityLayer();
  }
  componentWillMount = () => {//上树前获取数据
    this.getData();
  }

  getData = async() =>{
    const data = await request('/index')
    const {city , poster , movie} = data;
    this.setState({
      city,
      poster,
      movie
    })
  }

  render() {
    const {city , poster , movie , cityLayerVisible} = this.state;
    return (
      <div className = "home">
        <Topbar city = {city} showCityLayer={this.showCityLayer}></Topbar>
        <div className="home__slide">
          <div className="home__slideWrap">
            <Slide data = {poster}></Slide>
          </div>
        </div>
        <ul className="home__movieWrap">
          {movie.map((item , index) => <li key = {index}> <Link to="/detail"><Movieitem data = {item}></Movieitem></Link> </li>)}
        </ul>

        <TabMenu current = "movie"></TabMenu>

        {cityLayerVisible &&
          <RenderToBody>
            <CityLayer onClose = {this.hideCityLayer} onSelect = {this.onChangeCity}></CityLayer>
          </RenderToBody>}
      </div>

    )
  }
};
