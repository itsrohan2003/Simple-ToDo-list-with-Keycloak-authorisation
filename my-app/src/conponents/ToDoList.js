import React from 'react';
import TodoItem from './ToDoItem';  // Import the new TodoItem component

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
