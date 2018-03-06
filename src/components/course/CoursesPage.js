import React, { Component } from 'react'

export default class CoursesPages extends Component {
    state = {
        course: { title: '' }
    }

    // constructor(props, context) {
    //     super(props, context)

    //     this.state = {
    //         course: { title: '' }
    //     }
    // }

    onTitleChange = event => {
        const course = this.state.couse
        course.title = event.target.value
        this.setState({ course: course })
    }

    onClickSave = () => {
        alert(`Saving ${this.state.course.title}`)
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
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
