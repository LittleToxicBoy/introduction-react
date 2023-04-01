import React from "react";
import './TodoSearch.css'

function TodoSeach({searchValue, setSearchValue }) {

    const onSearch = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return [
        <input className="navegacion" placeholder="Buscar"
            value={searchValue}
            onChange={onSearch}></input>,
    ];

}

export { TodoSeach };