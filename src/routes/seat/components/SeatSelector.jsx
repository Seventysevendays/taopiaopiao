import React from 'react';
import './SeatMovieInfo.css'
import {data} from '../../../mock/seat.json'
import './SeatSelector.css';
import PropTypes from 'prop-types'

const SEAT_WIDTH = 50;//单个座位的大小
const SEAT_HEIGHT = 50;
const canvas_width = SEAT_WIDTH * data[data.length - 1].colIndex;
const canvas_height = SEAT_HEIGHT * data[data.length - 1].rowIndex;
const ratio = window.devicePixelRatio;
const DRAW_WIDTH = SEAT_WIDTH * ratio;
const DRAW_HEIGHT = SEAT_HEIGHT * ratio;
const draw_canvas_width = canvas_width * ratio;
const draw_canvas_height = canvas_height * ratio;

class SeatSelector extends React.Component {
  componentDidMount(){
    this.ctx = this.refs.canvas.getContext("2d");

    this.ctx.font = `${10 * ratio}px Arial`
    this.ctx.fillStyle = "#fff";
    this.ctx.textAlign = "center";

    const emptyImage = new Image();
    const selectImage = new Image();
    const soldImage = new Image();

    let count = 0;
    const loadCallback = () =>{
      count ++;
      if(count === 3){
        this.emptyImage = emptyImage;
        this.selectImage = selectImage;
        this.soldImage = soldImage;
        this.drawSeat();
      }
    }
    emptyImage.onload = loadCallback;
    selectImage.onload = loadCallback;
    soldImage.onload = loadCallback;

    emptyImage.src = '/source/seat-empty.png'
    selectImage.src = '/source/seat-selected.png'
    soldImage.src = '/source/seat-sold.png'
  }
  drawSeat(){
    const seatData = data;
    for(let i = 0; i < seatData.length; i ++){
      const {isSold , xPos , yPos} = seatData[i];
      const offsetLeft = (xPos - 1) * DRAW_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_HEIGHT;
      if(isSold){
        this.ctx.drawImage(this.soldImage , offsetLeft , offsetTop , DRAW_WIDTH , DRAW_HEIGHT)
      }else{
        this.ctx.drawImage(this.emptyImage , offsetLeft , offsetTop , DRAW_WIDTH , DRAW_HEIGHT)
      }
    }
  }
  drawSelectSeat(){
    const selectSeat = this.props.selectSeat
    for(let i = 0; i < selectSeat.length; i ++){
      const {xPos , yPos , rowIndex , colIndex} = selectSeat[i];
      const offsetLeft = (xPos - 1) * DRAW_WIDTH;
      const offsetTop = (yPos - 1) * DRAW_HEIGHT;
      this.ctx.drawImage(this.selectImage , offsetLeft , offsetTop , DRAW_WIDTH , DRAW_HEIGHT);
      this.ctx.fillText(`${rowIndex}排` , offsetLeft + DRAW_WIDTH /2 , offsetTop + DRAW_HEIGHT / 3)
      this.ctx.fillText(`${colIndex}座` , offsetLeft + DRAW_WIDTH / 2 , offsetTop + DRAW_HEIGHT * 2 / 3)

    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    this.ctx.clearRect(0 , 0 , draw_canvas_width, draw_canvas_height);//先清理画布
    this.drawSeat();//再重新画
    this.drawSelectSeat();
  }

  clickSeat(e){
    const offset = this.refs.canvas.getBoundingClientRect();
    const clickX = e.pageX - offset.left;//点击位置距离canvas盒子左边距
    const clickY = e.pageY - offset.top;
    const xPos = Math.ceil(clickX / SEAT_WIDTH)
    const yPos = Math.ceil(clickY / SEAT_HEIGHT)
    const seat = data.find(seat => seat.xPos === xPos && seat.yPos === yPos)
    if(!seat || seat.isSold){
      return;
    }
    const seatIndex = this.props.selectSeat.findIndex(item => item.id === seat.id);
    if(seatIndex > -1){
      this.props.onRemove(seat.id);
    }else{
      if(this.props.selectSeat.length >= 4){
        alert('不能超过4个座位')
      }else{
        this.props.onAdd(seat);
      }
    }
  }
  render() {
    return (
      <canvas onClick={this.clickSeat.bind(this)} ref="canvas" width={draw_canvas_width} height={draw_canvas_height}></canvas>
    )
  }
}

SeatSelector.propTypes = {
  selectSeat : PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
}

export default SeatSelector;
