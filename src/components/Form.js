import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            course: 'React'
        }
    }

    handleTextChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleCourse = (event) => {
        this.setState({
            course: event.target.value
        })
    }

    handleForm = (event) => {
        const { username, comment, course } = this.state
        console.log(`${username} ${comment} ${course}`)
        event.preventDefault()
    }



    render() {
        return (
            <form onSubmit={this.handleForm}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username}
                        onChange={this.handleTextChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <label>Course</label>
                    <select value={this.state.course} onChange={this.handleCourse}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form;