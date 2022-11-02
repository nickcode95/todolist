import React, {useState} from 'react';
import ToDoItems from './ToDoItems';


function App() {
  // Set initial state of user input to empty
  const [userText, changeUserText] =useState ('');
  // Create an empty array to push user inputted list items to
  const [buttonText, changeButtonText]: any[] =useState([]);

// Capture value from user input and store in userText object
 let handleChange = function  (e: any) {
  changeUserText(e.target.value);
   }

// Pass value of userText to buttonText array
   function handleClick () {
    changeButtonText([userText, ...buttonText]);
    changeUserText('');
   }


// Map through array of to do list items and render each item in a list item
   const arrayItems = buttonText.map((buttonText: any, i: any)=>
    <ToDoItems>
      buttonText={buttonText}
    </ToDoItems>
   )

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={userText} name="userText"/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* Render map in list */}
        <ul>
          {arrayItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
