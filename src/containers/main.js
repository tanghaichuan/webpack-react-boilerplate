import React, {Component} from 'react'

import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'
import Main from '@/components/Main'
import Comment from "@/containers/comment";
import ShopCart from '@/containers/shopCart'

export default class extends Component {
  render() {
    return (
      <div>
        <ShopCart/>
      </div>
    )
  }
}