import React, { Component } from 'react'
import Counter from './counter'

export default class extends Component {
  constructor() {
    super()

    this.initValues = [
      {
        value: 0,
        label: 'First'
      },
      {
        value: 10,
        label: 'Second'
      },
      {
        value: 20,
        label: 'Third'
      }
    ]
    const initSum = this.initValues
      .map(item => item.value)
      .reduce((a, b) => a + b, 0)
    this.state = {
      sum: initSum
    }
  }
  onCounterUpdate(newVal, preVal) {
    //console.log(this) // onUpdate传入一个函数在Counter中调用，若不绑定this，则指向Counter对象
    const change = newVal - preVal
    this.setState({
      sum: this.state.sum + change
    })
  }
  render() {
    return (
      // 闭包，调用函数时会发生this变量提升，需要显式的绑定this
      <div className="counter-panel">
        {this.initValues.map((item, index) => (
          <Counter
            initValue={item.value}
            key={index}
            caption={item.label}
            onUpdate={this.onCounterUpdate.bind(this)}
          />
        ))}
        <hr />
        <div>Total Count: {this.state.sum}</div>
      </div>
    )
  }
}
