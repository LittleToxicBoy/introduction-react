import React from "react";
import './TodoSearch.css'

function TodoSeach() {
    const onSearch = (event) => {
        console.log(event.target.value);
    }

    return (
        <input className="navegacion" placeholder="Buscar" 
        onChange={onSearch}></input>
    );
}

export { TodoSeach };