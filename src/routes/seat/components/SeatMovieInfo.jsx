import React from 'react';
import './SeatMovieInfo.css'

class SeatMovieInfo extends React.Component {
  render() {
    return (
      <div className="seatMovieInfo">
        <div className="seatMovieInfo__title">唐人街探案</div>
        <div className="seatMovieInfo__info">今天 下午2：00</div>
      </div>
    )
  }
}

export default SeatMovieInfo;
