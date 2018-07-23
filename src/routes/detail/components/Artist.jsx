import React from 'react';
import './Artist.css'
class Artist extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="artist">
        <ul className="artist__list">
          {
            data.map(item => {
              return <li key={item.image}>
                <a href="" className="artistInfo">
                  <div className="artistInfo__image" style={{ backgroundImage: `url(${item.image})` }}></div>
                  <dl className="artistInfo__name">{item.name}</dl>
                  <dd className="artistInfo__job">{item.job}</dd>
                </a>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Artist;
