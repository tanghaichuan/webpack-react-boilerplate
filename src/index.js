import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Main from './containers/main'
import '@/style/index.less'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
        <Component/>
    </AppContainer>, document.getElementById('app'))
}

render(Main)

// Webpack Hot Module Replacement API
if (module.hot) {
    module
        .hot
        .accept('./containers/main', () => {
            render(Main)
        })
}