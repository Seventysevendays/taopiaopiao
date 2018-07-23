import React from 'react';
import SeatMovieInfo from './components/SeatMovieInfo'
import SeatSelected from './components/SeatSelected'
import SeatSelector from './components/SeatSelector'
import './index.css'

class Seat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectSeat: []
    }
  }
  onRemove(id) {
    this.setState((prevState) => ({
      selectSeat: prevState.selectSeat.filter(item => item.id !== id)
    }))
  }
  onAdd(seat) {
    this.setState((prevState) => ({
      selectSeat: [...prevState.selectSeat, seat]
    }))
  }
  render() {
    const { selectSeat } = this.state;
    return (
      <div className="seat">
        <div className="tOperator">
          <div className="tOperator__icon tOperator__icon--blackBack" onClick={() => {window.history.back()}}></div>
          万达影城
          <div className="tOperator__icon tOperator__icon--blackShare"></div>
        </div>
        <SeatMovieInfo></SeatMovieInfo>
        <div className="seat__main">
          <div className="seat__tip"></div>
          <div className="seat__graph">
            <div className="seat__screen">B13</div>
            <SeatSelector
              selectSeat={selectSeat}
              onRemove={this.onRemove.bind(this)}
              onAdd={this.onAdd.bind(this)}
            ></SeatSelector>
          </div>
        </div>
        <SeatSelected
          onRemove={this.onRemove.bind(this)}
          selectSeat={selectSeat}
        ></SeatSelected>
      </div>
    )
  }
}

export default Seat;
