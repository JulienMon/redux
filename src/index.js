// index.js
import React from 'react'
import { render } from 'react-dom'

import App from './App'

//render(<div>Hello world from React!</div>, document.querySelector('#root'))
render(<App />, document.getElementById('root'))