import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedTime, setEditedTime] = useState(todo.time);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editedTitle, editedDescription, editedTime);
    setEditMode(false);
  };

  return (
    <li key={todo.id}>
      {editMode ? (
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
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <strong>{todo.title}</strong>
          <p>{todo.description}</p>
          <p>Time: {todo.time}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;