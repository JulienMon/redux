import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'

class ManageCoursePage extends Component {
    static propTypes = {
        course: PropTypes.object.isRequired,
        authors: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    state = {
        course: { ...this.props.course },
        errors: {},
        redirect: false,
        saving: false
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            //populate form when existing course is loaded directly
            this.setState({ course: { ...nextProps.course } })
        }
    }

    updateCourseState = event => {
        const field = event.target.name
        let course = { ...this.state.course }
        course[field] = event.target.value

        return this.setState({ course: course })
    }

    saveCourse = event => {
        event.preventDefault()
        this.setState({ saving: true })
        this.props.actions
            .saveCourse(this.state.course)
            .then(this.redirect)
            .catch(error => {
                this.setState({ saving: false })
            })
    }

    redirect = () => {
        this.setState({ redirect: true, saving: false })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/courses" />
        }

        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                saving={this.state.saving}
            />
        )
    }
}

const getCourseById = (courses, id) => {
    return courses.find(course => course.id == id)
    //return course === undefined ? null : course
}

const mapStateToProps = (state, ownProps) => {
    const courseId = ownProps.match.params.id // from the path '/course/:id'

    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    }

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId)
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })

    return {
        course: course,
        authors: authorsFormattedForDropdown
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(courseActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
