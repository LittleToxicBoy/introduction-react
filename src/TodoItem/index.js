import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className={`listContainerItem ${props.completed && 'listContainerItemTrue'}`}>
            <div className="listCIok">
                <p>{props.text}</p>
            </div>
            <div className="spans">
                <span className="titulo-neon complete" onClick={props.onComplete}>OK</span>
                <span className="titulo-neon delete" onClick={props.onDelete}>X</span>
            </div>
        </li>
    );
}

export { TodoItem };