import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className={`listContainerItem ${props.complete && 'listContainerItemTrue'}`}>
            <div className="listCIok">
                <span>o</span>
                <p>{props.text}</p>
            </div>
            <span>X</span>
        </li>
    );
}

export { TodoItem };