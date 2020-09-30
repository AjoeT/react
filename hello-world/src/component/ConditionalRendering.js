import React, { Component } from 'react'
import styles from './stylesheet.module.css'
class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: false
        }
        
        this.LoginFunction = this.LoginFunction.bind(this)
        this.LogoutFunction = this.LogoutFunction.bind(this)
    }

    LoginFunction() {
        this.setState({
            isLoggedin : true
        })
    }

    LogoutFunction() {
        this.setState({
            isLoggedin : false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggedin ? <h1 className={styles.primary}>Welcome, user</h1> : <h1 className={styles.error}>Your are not logged in</h1>
                }
                <button onClick={this.LoginFunction}>Login</button>
                <button onClick={this.LogoutFunction}>Logout</button>
            </div>
        )
    }
}

export default ConditionalRendering
