import React, {Component} from 'react'
import CommentInput from './commentInput'
import CommentList from './commentList'

export default class extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <CommentInput/>
        <CommentList/>
      </div>
    )
  }
}