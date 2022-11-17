import React, {useState} from 'react';


function ToDoItems(props: any) {
    // Create state to see if the returned div has been clicked, if it has then we apply the line through style
    const [isClicked, setClick] =  useState(false);
    // Change state
    function clickChange () {
        setClick(prevState => !prevState);
    }
    return (
        <div className='listStyle'>
            <img src="images/trash.png" alt="delete icon" id="trash" onClick={() => {
                    props.onChecked(props.id);
                }} ></img>
            <li key={props.i} 
            style={{textDecoration: isClicked ? 'line-through' : 'none'}}
            onChange={clickChange}
                >
                <input type="checkbox" ></input>
                <span>{props.text}</span>
            </li>
        </div>

    )
}

export default ToDoItems;