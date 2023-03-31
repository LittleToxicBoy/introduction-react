import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = ()=>{
        alert('Terminaste el todo: ' + props.text);
    }

    const onDelete = ()=>{
        alert('Borraste el todo: ' + props.text);
    }

    return (
        <li className={`listContainerItem ${props.complete && 'listContainerItemTrue'}`}>
            <div className="listCIok">
                <span onClick={onComplete}>o</span>
                <p>{props.text}</p>
            </div>
            <span onClick={onDelete}>X</span>
        </li>
    );
}

export { TodoItem };