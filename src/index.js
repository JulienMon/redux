import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//render(<div>Hello world from React!</div>, document.querySelector('#root'))
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
