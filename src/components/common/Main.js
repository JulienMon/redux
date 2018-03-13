import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../home/HomePage'
import AboutPage from '../about/AboutPage'
import CoursesPage from '../course/CoursesPage'
import ManageCoursePage from '../course/ManageCoursePage'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route path='/home' component={HomePage}/> */}
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course/:id" component={ManageCoursePage} />
            <Route path="/course" component={ManageCoursePage} />
        </Switch>
    </main>
)

export default Main
