import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    increment() {
        this.setState((prevState) => ({         // if the state depends on the previous state always depend on
            counter : prevState.counter + 1     // - the `arrow unction to the setstate method`
        }))
    }

    render() {
        return (
            <div>
                count : {this.state.counter}
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
