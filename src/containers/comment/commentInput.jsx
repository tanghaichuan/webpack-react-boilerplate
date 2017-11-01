import React, {Component} from 'react'
import './index.less'

export default class extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className="field--name">用户名：</span>
          <div className="field--input"> 
            <input/>
          </div>
        </div>
      </div>
    )
  }
}