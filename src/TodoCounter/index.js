import React from "react";
import { TodoContex } from "../todoContex";
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContex);

    return (
        <h2 className="TodoCounter">Has Completado {completedTodos} de {totalTodos} Todos</h2>
    );
}

export {TodoCounter};