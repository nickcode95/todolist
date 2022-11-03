import React, {useState} from 'react';

function ToDoItems (props: any) {
    return (
        <li key={props.i}>
        <input type="checkbox" className='checkBox'></input>
        <span>{props.text}</span>
        </li>
    )
}

export default ToDoItems;