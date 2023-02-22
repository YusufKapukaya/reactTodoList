import './App.css';
import Form from './components/Form';
import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setinputText] = useState("");
  const [todos, settodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler(todos);
    saveLocalTodos();
  }, [todos, status]) //eslint-disable-line


  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      settodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        setinputText={setinputText}
        todos={todos}
        settodos={settodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        settodos={settodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
