import React, {Component} from 'react'

import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isLiked: false
    }
  }
  handleClickTitle() {
    console.log(this);
    //this.state.isLiked = !this.state.isLiked // 直接改变属性无法触发vdom更新
    this.setState({   // 这里应该是在改变属性的时候触发vdom更新
      isLiked: !this.state.isLiked
    })
  }
  render() {
    return (
      <div>
        <button onClick={this     // 这里调用handle回调函数的上下文应该不是App本身
          .handleClickTitle
          .bind(this)}>
          {this.state.isLiked
            ? '取消'
            : '点赞'}
          👍
        </button>
        <Header/>
        <Footer/>
      </div>
    )
  }
}