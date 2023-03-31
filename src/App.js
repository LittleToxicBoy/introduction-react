// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSeach } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";

const todos = [
  { text: 'Cortar Cebolla', complete: false },
  { text: 'Comprar el gas', complete: false },
  { text: 'Hacer la memoria de estadia', complete: true },
]

function App(props) {
  return (
    <React.Fragment>

      <div className="divContenedor">
        <div className="Contenido">
          <TodoCounter />
          <TodoSeach />

          <TodoList>
            {todos.map(todo => (
              <TodoItem key={todo.text} complete={todo.complete} text={todo.text} />
            ))}
          </TodoList>

          <TodoButton />
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
