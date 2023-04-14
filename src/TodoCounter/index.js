import React from "react";
import { TodoContex } from "../todoContex";
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContex);

    return (
        <div className="divTodoCounter">
            <div className="headerimage">
                <h2 className="header">TODOS</h2>
                <img src="https://i.ibb.co/xgHjDj1/planning.png" alt="planning" border="0"></img>
            </div>
            <h2 className="TodoCounter">Has Completado {completedTodos} de {totalTodos} Todos</h2>
        </div>
    );
}

export { TodoCounter };