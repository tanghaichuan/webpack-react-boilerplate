import React, {Component} from 'react'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'

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