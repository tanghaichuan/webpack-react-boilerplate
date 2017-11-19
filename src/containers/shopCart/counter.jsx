import React, { Component } from 'react'
import './index.less'

export default class extends Component {
  static defaultProps = {
    initValue: 0
  }
  constructor(props) {
    super(props)
    this.state = {
      count: props.initValue
    }
  }
  onClickDecrementButton() {
    this.updateCount(false)
  }
  onClickIncrementButton() {
    this.updateCount(true)
  }
  updateCount(flag) {
    const preVal = this.state.count
    const newVal = flag ? preVal + 1 : preVal - 1
    this.setState({
      count: newVal
    })
    this.props.onUpdate(newVal, preVal)
  }
  render() {
    const { caption } = this.props
    return (
      <div className="counter-wrapper">
        <button
          className="counter input-number__decrease"
          onClick={() => this.onClickDecrementButton()} // click调用onClickDecrementButton时是会发生变量提升，this丢失
        >
          -
        </button>
        <button
          className="counter input-number__increase"
          onClick={() => this.onClickIncrementButton()}
        >
          +
        </button>
        <span>
          {caption} count：{this.state.count}
        </span>
      </div>
    )
  }
}
