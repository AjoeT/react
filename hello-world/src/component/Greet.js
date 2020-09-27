import React from 'react'

// function Greet() {
//     return <h1>Hello, Ajoe</h1>
// } or arrow function

const Greet = () => <h1>Hello ,Ajoe. Arrow funcion</h1>

export default Greet


// or named export 
// export const Greet = () => <h1>Hello ,Ajoe. Arrow funcion</h1>
// remove default export then use { Greet } while importing


// If we are using default export then we can give different name while importing