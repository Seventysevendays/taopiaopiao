import './Paragraph.css';
import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

class Paragraph extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isCollapse : false,
      isNeedCollapse : false
    }
  }

  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    const value = this.props.height;
    if(dom.clientHeight > value){
      this.setState({
        isCollapse: true,
        isNeedCollapse : true
      })
    }
  }

  toggleStatus = () => {
    if(this.state.isNeedCollapse){
      this.setState((prevState) => ({
        isCollapse: !prevState.isCollapse
      }))
    }
  }

  render() {
    const {isCollapse} = this.state;
    const cls = isCollapse ? "paragraph--collapse" : "";
    return (
      <div className= {`paragraph ${cls}`}
          onClick={this.toggleStatus}
          ref = "div"
          style = {{"maxHeight" : isCollapse ? this.props.height + "px" : ""}}
      >
        {this.props.children}
        {this.state.isCollapse && <div className="paragraph__label">展开</div> }
      </div>
    )
  }
}

Paragraph.propTypes = {
  children : PropTypes.any,
  height : PropTypes.number
}
export default Paragraph;
