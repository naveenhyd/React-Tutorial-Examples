import React, { Component } from 'react';


class UserGreeting extends Component {

    constructor() {
        super()

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // return this.state.isLoggedIn ? (<div>welcome naveen</div>) : (<div>welcome guest</div>)
        return this.state.isLoggedIn && <div>welcome naveen 2</div>
    }

}

export default UserGreeting