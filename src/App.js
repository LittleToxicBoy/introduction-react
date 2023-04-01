// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSeach } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";

const defaulttodos = [
  { text: 'Cortar Cebolla', complete: false },
  { text: 'Comprar el gas', complete: false },
  { text: 'Hacer la memoria de estadia', complete: true },
]

function App() {
  //estados
  const [todos, setTodos] = React.useState(defaulttodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.complete).length;
  const totalTodos = todos.length;

  let seacrhedTodos = todos.length;

  if (searchValue >= 1) {
    seacrhedTodos = todos;
  } else {
    seacrhedTodos = todos.filter(
      todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      }
    );
  }
  //marcar todos como completados
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    console.log(todoIndex);
    const newTodos = [...todos];
    newTodos[todoIndex].complete = true;
    setTodos(newTodos);
  }

  //Eliminar un todo
  const deleteTodos = (text) => {
    const newT = todos.filter(todo => todo.text != text);
    setTodos(newT);
  }

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

export default App;
