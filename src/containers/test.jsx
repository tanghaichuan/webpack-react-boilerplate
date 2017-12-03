import React, { Component } from 'react'
import Button from '@/components/button'
import Collapse from '@/components/collapse'

const Panel = Collapse.Panel

export default class Test extends Component {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }
  handleLoading() {
    this.setState({
      loading: true
    })
  }
  render() {
    return (
      <div>
        <p onClick={this.handleLoading.bind(this)}>11111</p>
        <Button
          type="primary"
          onClick={this.handleLoading.bind(this)}
          loading={this.state.loading}
        >
          Primary
        </Button>
        <Collapse defaultActiveKey={['1', '2']}>
          <Panel header="这个一个标题" key="1">
            <p>这是一个段落</p>
          </Panel>
          <Panel header="这个一个标题" key="2">
            <p>这是一个段落</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}
