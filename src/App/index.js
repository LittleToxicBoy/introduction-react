// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoProvider } from "../todoContex";

import { AppUI } from "./AppUi";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
