import React, {Component} from 'react'

import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Main from '@/components/Main'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}