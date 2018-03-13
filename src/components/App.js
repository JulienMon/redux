import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Main from './common/Main'
import Header from './common/Header'

class App extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired
    }

    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                <Main />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.ajaxCallsInProgress > 0
    }
}

export default withRouter(connect(mapStateToProps)(App))
