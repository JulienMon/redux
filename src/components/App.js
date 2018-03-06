import React, { Component } from 'react'

import Main from './common/Main'
import Header from './common/Header'

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Main />
            </div>
        )

    }
}

