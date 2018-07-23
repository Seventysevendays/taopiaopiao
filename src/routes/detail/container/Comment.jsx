import React from 'react';
import ScoreDistribute from '../components/ScoreDistribute'
import TagList from '../components/TagList'
import CommentList from '../components/CommentList'
import request from '../../../helpers/request'

class Comment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tags: [],
      comments: [],
      current: ''
    }
  }
  componentDidMount(){
    this.getData();
  }

  getData = async() =>{
    const {tags , list} = await request('/comment');
    this.setState({
      tags,
      comments : list,
      current: tags[0] ? tags[0].text : ""
    })
  }
  changeTag(value){
    if(value !== this.state.current){
      this.setState({
        current: value
      })
    }
  }
  toggleZan(id , zan){
    this.setState((prevState) => ({
      comments: prevState.comments.map(item => {
        return item.id === id ? {...item , "isZan" : !item.isZan , "zan" : item.isZan ? zan - 1 : zan + 1} : item
      })
    }))
  }
  render() {
    const {tags , comments , current} = this.state;
    const filterComments = comments.filter(item => item.tag === current)
    return (
      <div>
        <ScoreDistribute></ScoreDistribute>
        <div style={{"marginTop": "16px"}}>
          <TagList data={tags} current={current} onClick={this.changeTag.bind(this)}></TagList>
        </div>
        <div style={{"marginTop": "16px"}}>
          <CommentList data={filterComments} onZan={this.toggleZan.bind(this)}></CommentList>
        </div>

      </div>
    )
  }
}

export default Comment;
