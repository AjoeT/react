import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    greetParent(input) {
        alert(`Greet parent from ${input}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greet={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
