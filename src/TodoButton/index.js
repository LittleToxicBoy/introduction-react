import React from "react";
import './TodoButton.css'

function TodoButton(props) {
    const btnAgregar = () => {
        props.setOpenModal(true);
    }

    return (
        <div className="DivbtnAgregar"
            onClick={btnAgregar}>
            <button>+</button>
        </div>
    );
}

export { TodoButton };