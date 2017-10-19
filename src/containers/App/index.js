import React, {Component} from 'react'

import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}