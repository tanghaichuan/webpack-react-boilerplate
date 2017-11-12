import React, {Component} from 'react'
import './index.less'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      username: '11',
      content: '22'
    }
  }
  handleNameChange(event) {
    this.setState({username: event.target.value})
  }
  handleContentChange(event) {
    this.setState({content: event.target.value})
  }
  handleSubmit() {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this.props.onSubmit({username, content})
    }
    //this.setState({content: ''})
  }
  render() {
    return (
      <div className='comment-input col-4'>
        <div className='comment-field row'>
          <span className="field--name col-3">用户名：</span>
          <div className="field--input col-8">
            <input value={this.state.username} onChange={() => this.handleNameChange()}/>
          </div>
        </div>
        <div className='comment-field row'>
          <span className="field--name col-3">内容：</span>
          <div className="field--textarea col-8">
            <textarea
              value={this.state.content}
              onChange={() => this.handleContentChange()}/>
          </div>
        </div>
        <div className="comment-submit col-3">
          <button onClick={() => this.handleSubmit()}>发布</button>
        </div>
      </div>
    )
  }
}