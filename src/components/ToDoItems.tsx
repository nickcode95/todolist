import React, { useState } from 'react';

function ToDoItems(props: any) {
    // Create state to see if the returned div has been clicked, if it has then we apply the line through style
    const [isClicked, setClick] = useState(false);
    // Change state
    function clickChange() {
        setClick(prevState => !prevState);
    }
    return (
        <div className='listStyle flex-container'>
            <div className='img-flex-item'>
                <img src="images/trash.png" alt="delete icon" id="trash" onClick={() => {
                    props.onChecked(props.id);
                }} ></img>
            </div>
            <div className='li-flex-item'>
                <li key={props.i}
                    style={{ textDecoration: isClicked ? 'line-through' : 'none' }}                  
                >{props.text}
                </li>

            </div>
            <div className='checkbox-flex-item'>
                <input onClick={clickChange} type="checkbox" ></input>
            </div>

        </div>

    )
}

export default ToDoItems;