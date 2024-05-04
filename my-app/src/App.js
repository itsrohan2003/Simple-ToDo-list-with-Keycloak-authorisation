import React, { useState } from 'react';
import TodoForm from './conponents/ToDoForm.js';
import TodoList from './conponents/ToDoList.js';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    // Implement edit functionality here
    console.log(`Editing todo with id ${id}`);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default App;
