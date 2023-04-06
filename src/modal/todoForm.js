import React from "react";
import { TodoContex } from "../todoContex";
import './modal.css';

function TodoForm() {
    const [newTodoValue, setTodoValue] = React.useState('');

    const onChangeValue = (event) => {
        setTodoValue(event.target.value);
    };

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContex);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onAdd}>
            <h2>Agregar un nuevo todo</h2>
            <label>Titulo del todo</label>
            <textarea
                value={newTodoValue}
                onChange={onChangeValue}
                placeholder="Escriba algun todo"
            />
            <div className="btn-formularios">
                <button onClick={onCancel} type="button" className="cancelar">Cancelar</button>
                <button type="submit" className="agregar">Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };