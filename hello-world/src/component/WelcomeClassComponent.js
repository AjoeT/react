import React, { Component } from 'react'

class WelcomeClassComponent extends Component{
    render() {
        return <h1>Welcome, {this.props.name}</h1>
    }
}

export default WelcomeClassComponent