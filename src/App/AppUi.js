import React from "react";
import { TodoContex } from "../todoContex";
import { TodoCounter } from '../TodoCounter';
import { TodoSeach } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";

function AppUI() {
    return (
        <React.Fragment>
            <div className="divContenedor">
                <div className="Contenido">

                    <TodoCounter />

                    <TodoSeach />

                    <TodoContex.Consumer>
                        {({error, loading, searchedTodos, completeTodo, deleteTodo}) => {
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
                        }}
                    </TodoContex.Consumer>

                    <TodoButton />
                </div>
            </div>
        </React.Fragment>
    );
}

export { AppUI };