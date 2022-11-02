// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSeach } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";

const todos = [
  { text: 'Cortar Cebolla', colpleted: false },
  { text: 'Comprar el gas', colpleted: false },
  { text: 'Hacer la memoria de estadia', colpleted: false },
]

function App() {
  return (
    <React.Fragment>

      <div className="divContenedor">
        <div className="Contenido">
          <TodoCounter />
          <TodoSeach />

          <TodoList>
            {todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text} />
            ))}
          </TodoList>

          <TodoButton />
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
