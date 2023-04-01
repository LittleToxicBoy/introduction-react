import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSeach } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";

function AppUI(
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    seacrhedTodos,
    completeTodos,
    deleteTodos,
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
                        {seacrhedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                complete={todo.complete}
                                text={todo.text}
                                onComplete={() => completeTodos(todo.text)}
                                onDelete={() => deleteTodos(todo.text)}
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