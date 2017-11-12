import React, {Component} from 'react'
import CommentInput from './commentInput'
import CommentList from './commentList'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmit(comment) {
    this
      .state
      .comments
      .push(comment)
    this.setState({comments: this.state.comments})
  }
  render() {
    return (
      <div>
        <CommentInput onSubmit={(comment) => this.handleSubmit(comment)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}