import React from "react";
import { TodoContex } from "../todoContex";
import { TodoCounter } from '../TodoCounter';
import { TodoSeach } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import { Modal } from "../modal";
import { TodoForm } from "../modal/todoForm";
import { Loading } from "../animacionLoading";
import { PrimerTodo } from "../todoFirst";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContex);

    return (
        <React.Fragment>
            <div className="divContenedor">
                <div className="Contenido">
                    <TodoCounter />
                    <TodoSeach />
                    <TodoList>
                        {loading && <Loading/>}
                        {error && <p>Hubo un error papu</p>}
                        {(!loading && !searchedTodos.length) && <PrimerTodo/>}

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

                    {!!openModal && (
                        <Modal setCloseModal={setOpenModal}>
                            <TodoForm></TodoForm>
                        </Modal>
                    )}

                    <TodoButton
                        setOpenModal={setOpenModal}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export { AppUI };