import React, { Component } from 'react';
import ChildComponent from './ChildComponent';


class ParentComponent extends Component {

    constructor() {
        super()
        this.state = {
            parentName: 'parent 1'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        console.log(`Hello ${this.state.parentName} and ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent;