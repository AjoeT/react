import React from 'react';


const WelcomeName = (props) => {
    return (
        <div>
            <h1>Welcome , {props.name} </h1>
            {props.children}
        </div>
    )
}
export default WelcomeName