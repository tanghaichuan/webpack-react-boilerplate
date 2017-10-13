import React, {Component} from 'react'
import './index.css'

//cosnole.log('I get called from print.js!');

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="header">Header</h1>
            </div>
        )
    }
}