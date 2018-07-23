import React from 'react'
import './TagList.css'
import PropTypes from 'prop-types'

const TagList = ({ data , current , onClick}) => {
  return (
    <div className="tagList">
      {
        data.map(item => {
          return <span
            key={item.text}
            className={`tagList__item ${current === item.text && "tagList__item--active"}`}
            onClick={()=> onClick(item.text)}
          >
            {item.text}{item.count}
          </span>
        })
      }
    </div>
  )
}

TagList.propTypes = {
  data: PropTypes.array.isRequired
}
export default TagList;
