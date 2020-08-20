import React, { Component } from 'react';

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Call Back Value:', this.state.count)
        // })
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))

        console.log(this.state.count)
        // this.setState((prevState)=>{

        // })

    }


    render() {
        return (
            <div>
                <p>count: {this.state.count}</p>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;