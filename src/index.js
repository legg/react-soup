import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.styl'

import {getStore, goTo} from './state'
import {Provider} from 'react-redux'

const store = getStore()
goTo('/')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)