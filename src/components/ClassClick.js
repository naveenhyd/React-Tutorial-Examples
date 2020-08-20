import React, { Component } from 'react';

class ClassClick extends Component {

    handerClick() {
        console.log('handler click 4')
    }

    render() {
        return (
            <button onClick={this.handerClick}>Click 3</button>
        )
    }
}

export default ClassClick;