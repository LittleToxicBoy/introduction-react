import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className={`listContainerItem ${props.completed && 'listContainerItemTrue'}`}>
            <div className="listCIok">
                <span onClick={props.onComplete}>o</span>
                <p>{props.text}</p>
            </div>
            <span onClick={props.onDelete}>X</span>
        </li>
    );
}

export { TodoItem };