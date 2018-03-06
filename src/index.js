import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './components/App'

import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

//render(<div>Hello world from React!</div>, document.querySelector('#root'))
render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
