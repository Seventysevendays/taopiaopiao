import React from 'react';
import './SeatSelected.css'

class SeatSelected extends React.Component {
  render() {
    if(this.props.selectSeat.length === 0){
      return null
    }
    return (
      <div className="seatSelected">
        <ul className="seatSelected__list">
          {this.props.selectSeat.map(item => {
            return  <li className="seatSelected__item movieTicket" key={item.id} >
            <div className="movieTicket__detail">
              <div className="movieTicket__pos">{item.rowIndex}排{item.colIndex}座</div>
              <div className="movieTicket__price">
                <i className="movieTicket__tag">卡</i> 33元
              </div>
            </div>
            <div className="movieTicket__close" onClick={() => this.props.onRemove(item.id)}></div>
          </li>
          })}
        </ul>
        <div className="seatSelected__buy">{33 * this.props.selectSeat.length}元确认选座</div>
      </div>
    )
  }
}

export default SeatSelected;
