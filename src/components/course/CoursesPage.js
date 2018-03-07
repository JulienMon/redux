import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class CoursesPages extends Component {
    static propTypes = {
        //dispatch: PropTypes.func.isRequired,
        courses: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    courseRow = (course, index) => <div key={index}>{course.title}</div>

    render() {
        const { courses } = this.props
        return (
            <div>
                <h1>Courses</h1>
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
