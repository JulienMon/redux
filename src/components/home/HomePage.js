import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight admin</h1>
                <p>React, Redux and React Router in ES6</p>
                <Link to="/about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )

    }
}