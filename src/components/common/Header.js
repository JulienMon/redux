import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => (
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
        </nav>
    </header>
)

export default Header
