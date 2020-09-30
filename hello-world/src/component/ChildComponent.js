import React from 'react'

function ChildComponent(props) {
    const {greet} = props               // destrucuting       
    return (
        <div>
            <button onClick={()=>greet('Input')}>Click Here</button>      
            {/* Function is referenced here from the parent class. We can also pass the */}
        </div>
    )
}

export default ChildComponent
