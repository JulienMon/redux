import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import LoadingDots from './LoadingDots'

const Header = ({ loading }) => (
    <header>
        <nav>
            <Link to="/" activeClassName="active">
                Home
            </Link>
            {' | '}
            <Link to="/about" activeClassName="active">
                About
            </Link>
            {' | '}
            <Link to="/courses" activeClassName="active">
                Courses
            </Link>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    </header>
)

Header.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default Header
