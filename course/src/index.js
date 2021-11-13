//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
Const App = () => {
     return(
         <div>
             <label class="label" for="name">Enter Name:</label>
             <input id="name" type="text" />>
             <button style={{"backgroundColor:blue; color:white; "}}></button>
        </div>
     )
}
//Take the react component and show it on the browser

ReactDOM.render(<App/>,document.querySelector('#root'));