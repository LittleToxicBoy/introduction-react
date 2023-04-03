import React from "react";
import { TodoContex } from "../todoContex";
import './TodoSearch.css'

function TodoSeach() {
    const {searchValue, setSearchValue } = React.useContext(TodoContex);

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