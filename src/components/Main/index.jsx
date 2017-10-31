import React, {Component} from 'react'

export default class extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
  constructor() {
    super()
    this.state = {
      isLiked: false // state用来存储可变化状态
    }
  }
  handleClickTitle() {
    // this.state.isLiked = !this.state.isLiked // 直接改变属性无法触发vdom更新
    this.setState({ // 这里应该是在改变属性的时候触发vdom更新
      isLiked: !this.state.isLiked
    })
  }
  render() {
    return (
      <button onClick={() => this.handleClickTitle()}>{this.state.isLiked
          ? this.props.likedText
          : this.props.unlikedText}👍</button>
    )
  }
}