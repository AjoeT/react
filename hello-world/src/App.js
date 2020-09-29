import React from 'react';
// import './App.css';
// import Greet from './component/Greet';
// import Welcome from './component/welcome';
import WelcomeName from './component/WelcomeName';
// import WelcomeClassComponent from './component/WelcomeClassComponent'
import MessageState from './component/MessageState';
import Counter from './component/Counter';


function App() {
  return (
    <div className="App">
    {/* <Greet />
    <Welcome /> */}
    {/* <WelcomeName name = "Ajoe"> 
    <p>This is the children from app class that is accessed in functional component</p> */}
    {/* </WelcomeName>
    <WelcomeName name = "Ajoe"> 
    <button>Subscribe</button>
    </WelcomeName>
    <WelcomeClassComponent name="Ajoe"/> */}
    {/* <MessageState /> */}
    {/* <Counter /> */}
    <WelcomeName name = 'Ajoe'>
      <p>This is the paragraph</p>
    </WelcomeName>
    </div>
  );
}

export default App;
