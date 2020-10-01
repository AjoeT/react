import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value1: 0,
            value2: 0,
            action: 'division',
            result: 0
        }
    }

    handleValue1 = (event) => {
        this.setState({
            value1 : event.target.value
        })
    }  
    handleValue2 = (event) => {
        this.setState({
            value2 : event.target.value
        })
    }
    
    handleSubmit = (event) => {
        let actionResult
        if (this.state.action === 'addition') {
            actionResult = parseFloat(this.state.value1) + parseFloat(this.state.value2)
        }
        else if (this.state.action === 'subtraction') {
            actionResult = parseFloat(this.state.value1) - parseFloat(this.state.value2)
        }
        else if (this.state.action === 'multiplication') {
            actionResult = parseFloat(this.state.value1) * parseFloat(this.state.value2)
        } 
        else if (this.state.action === 'division') {
            actionResult = parseFloat(this.state.value1) / parseFloat(this.state.value2)
        } 
        else
        {
            actionResult = 'Error'
        }
        this.setState({
            result : actionResult
        })
        event.preventDefault()
    }

    changeActionToAdditoin = () => {
        this.setState({
            action: 'addition'
        })
    }
    changeActionToSubtraction = () => {
        this.setState({
            action: 'subtraction'
        })
    }
    changeActionToMulitplication = () => {
        this.setState({
            action: 'multiplication'
        })
    }
    changeActionToDivision = () => {
        this.setState({
            action: 'division'
        })
    }
  

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Input 1 : </label>
                    <input type='numeric' value={this.state.value1} onChange={this.handleValue1}></input>
                </div>
                <div>
                    <label>Input 2 : </label>
                    <input type='numeric' value={this.state.value2} onChange={this.handleValue2}></input>
                </div>
                <button onClick={this.changeActionToAdditoin}>Addition</button>
                <button onClick={this.changeActionToSubtraction}>Subtraction</button>
                <button onClick={this.changeActionToMulitplication}>Multiplicaiton</button>
                <button onClick={this.changeActionToDivision}>Division</button>

                <div>
                    <h3>
                        Action is : {this.state.action}
                    </h3>
                </div>
                <div>
                    <h1>
                        Result is : {this.state.result}
                    </h1>
                </div>
            </form>
        )
    }
}

export default Form
