import React, {Component} from 'react'
import Comment from './comment'

export default class extends Component {
  constructor() {
    super()

  }
  static defaultProps = {
    comments: []
  }
  render() {
    return (
      <div>
        {this
          .props
          .comments
          .map((item, index) => <Comment comment={item} key={index}/>)}
      </div>
    )
  }
}