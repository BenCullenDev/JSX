// import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
// Create a React Component


const App = () => {
   const buttonText={ text: 'Click me please!'}
   const labelText='Enter Name:'
    return (
        <div>
        <label className="label" htmlFor="name">{labelText}</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
    );
};

// Take the React Component and display it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)