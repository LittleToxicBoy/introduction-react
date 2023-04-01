import React from "react";
import './TodoButton.css'

function TodoButton(props) {
    const btnAgregar = (msg)=>{
        alert(msg);
    }

    return (
        <div className="DivbtnAgregar"
        onClick={()=> btnAgregar('agregar')}>
            <button>+</button>
        </div>
    );
}

export { TodoButton };