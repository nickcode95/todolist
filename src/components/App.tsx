import React, {Dispatch, SetStateAction, useState} from 'react';
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

  //  Using the index of items array to remove it from the array. This is passed as a props and assigned to the bin icon
   function deleteItem (id: any) {
    changeButtonText(prevItems  => {
      return prevItems.filter(
        (item: any, index: any) => {
          return index !== id
        }
      )
    })
   }

// Map through array of to do list items and render each item in a list item
   const arrayItems = buttonText.map((buttonText: any, i: any)=>
    <ToDoItems 
    key={i} 
    id={i}
    text={buttonText} 
    onChecked={deleteItem}>    
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
