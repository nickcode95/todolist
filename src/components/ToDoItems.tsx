import React, {useState} from 'react';

function ToDoItems (props: any) {
    return (
        <li key={Number.toString()}>
        <input type="checkbox" className='checkBox'></input>
        <span>{props.buttonText}</span>
        </li>
    )
}

export default ToDoItems;