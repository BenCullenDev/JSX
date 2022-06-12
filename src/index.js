// import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
// Create a React Component


const App = () => {
   const buttonText='Click me please!'
    return (
        <div>
        <label className="label" for="name">Enter Name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
    </div>
    );
};

// Take the React Component and display it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)