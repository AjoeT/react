import React from 'react';

//Way 1 - In argument list
const WelcomeName = ({name, children}) => {
    return (
        <div>
            <h1>Welcome , {name} </h1>
            { children }
        </div>
    )
}


// //Way - In function body 
// const WelcomeName = (props) => {
//     const { name } = props
//     return (
//         <div>
//             <h1>Welcome , {name} </h1>
//             {props.children}
//         </div>
//     )
// }

export default WelcomeName