import React from 'react'
import Star from '../../../components/Star'
import Paragraph from '../../../components/Paragraph'
import './CommentList.css'

class commentItem extends React.Component {
  render() {
    return (
      <ul className="commentList">
        {
          this.props.data.map(item => {
            return <li key={item.id}>
              <div className="commentItem">
                <div className="commentUser">
                  <div className="commentUser__avatar" style={{ backgroundImage: `url(/source/default-avatar.jpg)` }}></div>
                  <div className="commentUser__detail">
                    <div className="commentUser__name">{item.name}</div></div>
                  <div className="commentUser__score">
                    <Star value={item.score}></Star>
                    <span className="commentUser__value">{item.score}</span>
                  </div>
                </div>
                <Paragraph height={84}>
                  <div>
                    {item.content}
                  </div>
                </Paragraph>
                <div className="commentItem__detail">
                  <div className="commentItem__time">{item.time}</div>
                  <div className={`commentItem__zan ${item.isZan && "commentItem__zan--active"}`}>
                    <i onClick={() => this.props.onZan(item.id , item.zan)}/>
                    {item.zan}
                  </div>
                </div>
              </div>

            </li>
          })
        }
      </ul>
    )
  }
}

commentItem.propTypes = {
  //PropTypes
}
export default commentItem;
