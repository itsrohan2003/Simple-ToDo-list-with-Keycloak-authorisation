import React, { useState } from 'react';

const TodoList = ({ todos, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(null); // State to track which todo is being edited
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedTime, setEditedTime] = useState('');

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (id) => {
    setEditMode(id); // Set editMode to the ID of the todo being edited
    // Pre-fill the edit form fields with the current todo data
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditedTitle(todoToEdit.title);
    setEditedDescription(todoToEdit.description);
    setEditedTime(todoToEdit.time);
  };

  const handleSaveEdit = (id) => {
    // Call the onEdit function with the updated todo data
    onEdit(id, editedTitle, editedDescription, editedTime);
    setEditMode(null); // Exit edit mode
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editMode === todo.id ? (
              // Render edit form if in edit mode for this todo
              <div>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <input
                  type="text"
                  value={editedTime}
                  onChange={(e) => setEditedTime(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
              </div>
            ) : (
              // Render todo details if not in edit mode
              <div>
                <strong>{todo.title}</strong>
                <p>{todo.description}</p>
                <p>Time: {todo.time}</p>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
