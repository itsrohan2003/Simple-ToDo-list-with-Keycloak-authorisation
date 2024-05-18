import React from 'react';
import TodoItem from './ToDoItem'; // Import the correct path for TodoItem

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Todo List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onEdit={onEdit}
            style={{ marginBottom: '15px' }} // Optional: Pass down style to TodoItem
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;