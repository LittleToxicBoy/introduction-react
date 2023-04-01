// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { AppUI } from "./AppUi";

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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      seacrhedTodos={seacrhedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
