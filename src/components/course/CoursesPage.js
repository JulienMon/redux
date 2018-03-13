import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class CoursesPages extends Component {
    state = {
        redirect: false
    }

    redirectToAddCoursePage = () => {
        this.setState({
            redirect: true
        })
    }

    static propTypes = {
        //dispatch: PropTypes.func.isRequired,
        courses: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    courseRow = (course, index) => <div key={index}>{course.title}</div>

    render() {
        if (this.state.redirect) {
            return <Redirect to="/course" />
        }

        const { courses } = this.props
        return (
            <div>
                <h1>Courses</h1>
                <button
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                >
                    Add Course
                </button>
                <CourseList courses={courses} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    courses: state.courses
})

const mapDispatchToProps = dispatch => ({
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPages)
