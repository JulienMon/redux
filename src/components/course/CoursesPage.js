import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'

class CoursesPages extends Component {
    state = {
        course: { title: '' }
    }

    onTitleChange = event => {
        const course = this.state.course
        course.title = event.target.value
        this.setState({ course: course })
    }

    onClickSave = () => {
        //alert(`Saving ${this.state.course.title}`)
        this.props.dispatch(courseActions.createCourse(this.state.course))
    }

    courseRow = (course, index) => <div key={index}>{course.title}</div>

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input type="submit" value="Save" onClick={this.onClickSave} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    courses: state.courses
})

export default connect(mapStateToProps)(CoursesPages)
