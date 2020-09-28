import React, { Component } from 'react'

class MessageState extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome, user'
        }
    }

    changeMessage() {
        this.setState({
            message : 'Thank you for subscribing'
        })
    }

    logoutMessage() {
        this.setState({
            message : 'Logged out'
        })
    }

    render() {
        return (
            <div align='center'>
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                <button onClick={() => { this.logoutMessage() }}>Logout</button>
            </div>
        )
    }
}

export default MessageState