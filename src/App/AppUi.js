import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSeach } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";

function AppUI(
    {
        loading, 
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }
) {
    return (
        <React.Fragment>
            <div className="divContenedor">
                <div className="Contenido">

                    <TodoCounter
                        total={totalTodos}
                        completed={completedTodos}
                    />

                    <TodoSeach
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />

                    <TodoList>
                        {loading && <p>Cargando Papu</p>}
                        {error && <p>Hubo un error papu</p>}
                        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}

                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                completed={todo.completed}
                                text={todo.text}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>

                    <TodoButton />
                </div>
            </div>
        </React.Fragment>
    );
}

export { AppUI };